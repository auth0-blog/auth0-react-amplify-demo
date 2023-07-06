import {useAuth0} from "@auth0/auth0-react";

export default function UserProfile() {
    const { isLoading, isAuthenticated, user } = useAuth0();

    if (isLoading)
        return (
            <div className="text-center">Loading...</div>
        );

    if (!isAuthenticated) {
        return (
            <></>
        );
    }

    return (
        <section id="profile" className="relative pb-32 pt-24 sm:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <div className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">-</div>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        User Profile
                    </h2>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl">
                    <div className="shadow rounded-md bg-white p-4">
                        <figure className="grid grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-10 items-center">
                            <div className="justify-center flex">
                                <img src={user?.picture} alt={user?.name} className="rounded-xl bg-blue-50 lg:rounded-2xl border-2 border-blue-50" />
                            </div>
                            <div className="col-span-3">
                                <p className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                    {user?.name}
                                </p>
                                <p className="text-md leading-8 text-gray-500 sm:text-lg sm:leading-9">
                                    {user?.email}
                                </p>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

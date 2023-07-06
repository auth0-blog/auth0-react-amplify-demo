import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import {useAuth0} from "@auth0/auth0-react";

export default function Header() {
    const { isAuthenticated } = useAuth0();

    return (
        <header className="absolute inset-x-0 top-0 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-50">
            <div className="h-16 relative flex h-16 justify-between">
                <nav className="flex flex-1 items-center justify-between">
                    <div className="flex gap-4"></div>
                    <div className="flex gap-4">
                        {isAuthenticated && <a href="#profile" className="text-sm font-semibold leading-6 text-gray-900">Profile</a>}
                    </div>
                    <div className="flex gap-4">
                        {!isAuthenticated && <LoginButton />}
                        {isAuthenticated && <LogoutButton />}
                    </div>
                </nav>
            </div>
        </header>
    )
}

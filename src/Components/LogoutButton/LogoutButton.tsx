import {useAuth0} from "@auth0/auth0-react";

export default function LogoutButton() {
    const { logout } = useAuth0();

    return (
        <button
            className="rounded bg-red-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
            Log Out
        </button>
    )
}

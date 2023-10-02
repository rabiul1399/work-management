import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const [user, uLoading, UError] = useAuthState(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleSingOut = async (event) => {
    event.preventDefault();
    const success = await signOut();
    if (success) {
      alert("You are sign out");
    }
  };
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <details>
                  <summary>Product</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Solutions</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Learn</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to={"/pricing"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/enterprise"}>Enterprise</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Booster
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Product</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Solutions</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Learn</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/enterprise"}>Enterprise</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/signUp" className="btn w-24 btn-primary mr-3">
            Sign UP
          </Link>
          {!user ? (
            <Link to="/login" className="btn  w-24 btn-primary mr-2">
              Log in
            </Link>
          ) : (
            <Link
              onClick={handleSingOut}
              to="/login"
              className="btn  w-24 btn-primary mr-2"
            >
              Log Out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

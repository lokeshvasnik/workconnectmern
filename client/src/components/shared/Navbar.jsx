import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  const logoutHandler = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <>
      <nav className="border-gray-200 bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <div className=" flex space-x-3 md:order-2 md:space-x-5 rtl:space-x-reverse">
            {userData.token ? (
              <button
                type="button"
                className="text-medium rounded-full bg-[#FFDD00] p-4 px-6 text-center text-sm font-bold text-black"
                onClick={logoutHandler}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button
                    type="button"
                    className="text-medium rounded-full bg-[#FFDD00] p-4 px-6 text-center text-sm font-bold text-black"
                  >
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    className="text-medium rounded-full bg-[#FFDD00] p-4 px-6 text-center text-sm font-bold text-black"
                  >
                    Sign up
                  </button>
                </Link>
              </>
            )}

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-cta"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
              {userData.token ? (
                ""
              ) : (
                <Link to="/">
                  <img className="w-72" src="./workconnect_logo.png" alt="" />
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

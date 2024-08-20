import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="relative h-screen flex flex-col">
        <div className="w-full h-1/5 bg-orange-600 border"></div>

        <div className="absolute inset-0 z-10 flex items-center justify-center shadow-orange-600">
          <div className="w-11/12 h-[90%] bg-slate-100 flex items-center justify-around p-8 ">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold mb-4">To use Chat App</h3>
              <ul className="text-lg list-none">
                <li className="mb-2 flex gap-3 items-center ">
                  <p> Sign up if you are a first time user</p>
                  <Link
                    to="/signup"
                    className="text-white  bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600"
                  >
                    Signup
                  </Link>
                </li>
                <li className="mb-2 flex gap-3 items-center">
                  <p> Already a user?</p>
                  <Link
                    to="/login"
                    className="text-white  bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center w-64 h-64 rotate-45 bg-orange-600 rounded fade-border">
              <img
                src="/images/chat_app_logo.webp"
                alt="Chat App Logo"
                className="w-60 h-60 rotate-0"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-4/5 bg-gray-200"></div>
      </div>
    </>
  );
};

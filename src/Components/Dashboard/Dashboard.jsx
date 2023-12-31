import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
  const { User, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-white min-h-screen text-black">
      <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
        <RiMenu4Line />
      </label>

      <div className="lg:drawer-open lg:flex lg:flex-row-reverse gap-8 mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <main className="max-w-[1920px] w-full mx-auto space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-48 lg:flex-[3]">
          {/* Page content here */}
          <Outlet />
        </main>
        <div className="drawer-side rounded-lg">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <nav className="p-4 w-80 min-h-full bg-opacity-90 backdrop-blur-lg roboto space-y-8">
            <div className="text-center space-y-6 mt-6">
              <div className="mx-auto">
                <div>
                  <p className="text-black text-lg text-center">
                    {User?.displayName}
                  </p>
                </div>
              </div>
            </div>
            {/* Sidebar content here */}
            <div className="px-10">
              <div className="flex flex-col items-center space-y-2">
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "font-bold uppercase text-black bg-yellow-400 px-8 py-4 rounded-full w-full duration-150 shadow-lg"
                      : "font-bold uppercase text-white bg-zinc-600 rounded-full w-full hover:bg-yellow-400 hover:text-white duration-150 px-8 py-4 "
                  }
                >
                  MY PROFILE
                </NavLink>
                <NavLink
                  to="/dashboard/addTasks"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "font-bold uppercase text-black bg-yellow-400 px-8 py-4 rounded-full w-full duration-150 shadow-lg"
                      : "font-bold uppercase text-white bg-zinc-600 rounded-full w-full hover:bg-yellow-400 hover:text-white duration-150 px-8 py-4"
                  }
                >
                  Add Tasks
                </NavLink>
                <NavLink
                  to="/dashboard/tasks"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "font-bold uppercase text-black bg-yellow-400 px-8 py-4 rounded-full w-full duration-150 shadow-lg"
                      : "font-bold uppercase text-white bg-zinc-600 rounded-full w-full hover:bg-yellow-400 hover:text-white duration-150 px-8 py-4"
                  }
                >
                  Tasks
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "font-bold uppercase text-black bg-yellow-400 px-8 py-4 rounded-full w-full duration-150 shadow-lg"
                      : "font-bold uppercase text-white bg-zinc-600 rounded-full w-full hover:bg-yellow-400 hover:text-white duration-150 px-8 py-4"
                  }
                >
                  HOME
                </NavLink>
                <button
                  onClick={handleLogOut}
                  className="btn bg-red-400 text-white text-lg hover:bg-red-700 py-2 px-4 cursor-pointer rounded-full"
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

import { FaHome, FaTasks, } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdOutlinePostAdd,  } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Dashboard = () => {
    const { logOut } = useContext(AuthContext);
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
    <div className="flex min-h-screen">
      {/* Dashboard sidebar */}
      <div className="w-56 min-h-screen bg-gradient-to-r bg-zinc-600 text-white">
        <div className="flex items-center justify-center h-16 bg-zinc-500">
          <span className="text-2xl font-bold">Task Synergy</span>
        </div>
        <ul className="menu p-4">
          <li>
            <NavLink
              to="/dashboard/adminHome"
              className="flex items-center space-x-2 text-lg hover:text-gray-500 py-2 px-4">
              <FaHome />
              <span>Profile</span>
            </NavLink>
          </li>     
          <li>
            <NavLink
              to="/dashboard/addTasks"
              className="flex items-center space-x-2 text-lg hover:text-gray-200 py-2 px-4"
            >
              <MdOutlinePostAdd />
              <span>Add Tasks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/tasks"
              className="flex items-center space-x-2 text-lg hover:text-gray-200 py-2 px-4"
            >
              <FaTasks />
              <span>Tasks</span>
            </NavLink>
          </li>
          {/* Shared nav links */}
          <div className="divider my-4"></div>
          <li>
            <NavLink
              to="/"
              className="flex items-center space-x-2 text-lg hover:text-gray-200 py-2 px-4"
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
          <button
            onClick={handleLogOut}
            className="flex items-center space-x-2 text-lg hover:text-gray-200 py-2 px-4 cursor-pointer">
            <span>Logout</span>
          </button>
        </li>
          
          
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

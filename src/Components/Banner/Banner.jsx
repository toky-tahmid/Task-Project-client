/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="hero min-w-full min-h-screen relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/j48YC9t/Grey-Modern-Professional-Business-Project-Presentation.png)",
      }}
    >
      {user?.email ? (
        <Link to="/dashboard/adminHome">
          <button className="mt-48 text-sm flex items-center gap-2 md:text-base inter rounded py-3 px-5 text-white font-bold bg-purple-500 content-glow hover:bg-transparent hover:border-blue-500 hover:border hover:duration-1000 hover:text-purple-500">
            Let's Explore
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="mt-48 text-sm flex items-center gap-2 md:text-base inter rounded py-3 px-5 text-white font-bold bg-purple-500 content-glow hover:bg-transparent hover:border-blue-500 hover:border hover:duration-1000 hover:text-purple-500">
            Let's Explore
          </button>
        </Link>
      )}
    </div>
  );
};

export default Banner;

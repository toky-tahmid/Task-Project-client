import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <>
        <h1 className="text-4xl text-center font-bold">Welcome To Profile</h1>
        <br />
        <hr />
        {user && (
        <div className="avatar mt-7 online lg:ml-[400px]">
          <div className="w-32 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        )}
      </>
    </div>
  );
};

export default UserHome;

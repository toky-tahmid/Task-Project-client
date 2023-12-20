import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

// import Footer from "../Footer/Footer";


const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-32 mb-10 min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;

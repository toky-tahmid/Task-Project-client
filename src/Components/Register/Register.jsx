// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
// import useAxiosPublic from "../Dashboard/useAxiosPublic";

// const Register = () => {
//   const axiosPublic = useAxiosPublic();
//   const navigate = useNavigate();
//   const { createUser, UpdateProfile } = useContext(AuthContext);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const photo = e.target.photo.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const strongPasswordRegex =
//       /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//     if (!strongPasswordRegex.test(password)) {
//       setErrorMessage(
//         "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
//       );
//       return;
//     }
//     createUser(email, password)
//       .then((res) => {
//         console.log(res);
//         UpdateProfile(name, photo).then(() => {
//           const userInfo = {
//             name: name,
//             email: email,
//           };
//           axiosPublic.post("/users", userInfo).then((res) => {
//             if (res.data.insertedId) {
//               setSuccessMessage("Registered successfully!");
//               setErrorMessage("");
//             }
//             navigate("/");
//           });
//         });
//       })

//       .catch((error) => {
//         console.error("Registration failed:", error);
//         setErrorMessage("Registration failed.");
//         setSuccessMessage("");
//       });
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 to-red-400">
//       <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//         <h4 className="text-4xl font-bold text-pink-500 mb-6">
//           Register Now!!
//         </h4>
//         {errorMessage && <p className="text-error">{errorMessage}</p>}
//         {successMessage && <p className="text-success">{successMessage}</p>}
//         <form onSubmit={handleRegister} className="space-y-4">
//           <div className="relative">
//             <input
//               type="text"
//               required
//               name="photo"
//               placeholder="Photo Url"
//               className="input"
//             />
//             <label className="label">Photo Url</label>
//           </div>
//           <div className="relative">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="input"
//             />
//             <label className="label">Your Name</label>
//           </div>
//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               className="input"
//             />
//             <label className="label">Email</label>
//           </div>
//           <div className="relative">
//             <input
//               type="password"
//               name="password"
//               required
//               placeholder="Password"
//               className="input"
//             />
//             <label className="label">Password</label>
//           </div>
//           <div className="flex items-center justify-between">
//             <button className="btn btn-primary w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-red-400 hover:to-purple-500 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 text-xl font-semibold">
//               Register
//             </button>
//           </div>
//         </form>
//         <p className="mt-4 text-center text-gray-700">
//           Already have an account?
//           <Link to="/login" className="ml-1 text-purple-500 underline">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
  const { createUser, UpdateProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!strongPasswordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res);
        UpdateProfile(name, photo)
        .then(() => {
          setSuccessMessage("Registered successfully!");
          setErrorMessage("");
          
        });
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setErrorMessage("Registration failed.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            {errorMessage && <p className="text-error">{errorMessage}</p>}
            {successMessage && <p className="text-success">{successMessage}</p>}
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  required
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 text-white">Register</button>
              </div>
            </form>
            <p>
              Already have an account?
              <Link to="/login">
                <button className="btn btn-link">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


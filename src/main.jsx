import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';
import UserHome from './Components/Dashboard/UserHome/UserHome';
import ContactUs from './Components/ContactUs/ContactUs';
import AddTasks from './Components/Dashboard/AddTasks/AddTasks';
import Tasks from './Components/Dashboard/Tasks/Tasks';
import TaskUpdate from './Components/Dashboard/Tasks/TaskUpdate';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/ContactUs",
        element: <ContactUs></ContactUs>,
      },
      
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    loader: () => fetch("https://survey-server-mu.vercel.app/users"),
    children: [
      {
        path: "/dashboard/adminHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/addTasks",
        element: <AddTasks></AddTasks>,
      },
      {
        path: "/dashboard/tasks",
        element: <Tasks></Tasks>,
      },
      {
        path: "taskUpdate/:id",
        element: <TaskUpdate></TaskUpdate>,
        loader:({params})=>fetch(`http://localhost:5000/alltask/${params.id}`)
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

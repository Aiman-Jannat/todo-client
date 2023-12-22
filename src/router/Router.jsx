import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CreateTask from "../components/CreateTask";
import DashHome from "../components/DashHome";
import TodoList from "../components/TodoList";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../components/UpdateTask";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>

        }
      ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
          {
            path:'/dashboard',
            element:<DashHome></DashHome>
          },
          {
            path:'/dashboard/createTask',
            element:<CreateTask></CreateTask>
          },
          {
            path:'/dashboard/dashHome',
            element:<DashHome></DashHome>
          },
          {
            path:'/dashboard/todoList',
            element:<TodoList></TodoList>
          },
          {
            path:'/dashboard/updateTask/:id',
            element:<UpdateTask></UpdateTask>,
            loader:({params})=>fetch(`http://localhost:5000/tasks/specific/${params.id}`)
          },
        ]
    },
  ]);
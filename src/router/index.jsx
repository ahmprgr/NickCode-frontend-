import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import UserPanel from "../components/userPanel/Main";
import AdminPanel from "../components/adminPanel/Main";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-up",
      element: <Register />,
    },
    { path: "/sign-in", element: <Login /> },
    {
      path: "/user/dashboard",
      element: <UserPanel />,
    },
    {
      path: "/admin/dashboard",
      element: <AdminPanel />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/NickCode-frontend-" },
);

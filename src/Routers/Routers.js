import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Navbar from "../Pages/Navbar/Navbar";
import About from "../Pages/RoutePages/About/About";
import Blogs from "../Pages/RoutePages/Blogs/Blogs";
import Projects from "../Pages/RoutePages/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "work",
    element: <Projects />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "blog",
    element: <Blogs />,
  },
]);

export default router;

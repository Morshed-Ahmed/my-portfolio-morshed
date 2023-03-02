import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/RoutePages/About/About";
import Blogs from "../Pages/RoutePages/Blogs/Blogs";
import Contact from "../Pages/RoutePages/Contact/Contact";
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
  {
    path: "contact",
    element: <Contact />,
  },
]);

export default router;

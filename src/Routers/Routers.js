import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Navbar from "../Pages/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "work",
    element: (
      <div>
        <Navbar />
        <h1>Work</h1>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div className=" bg-gradient-to-t from-violet-50 to-pink-200">
        <Navbar />

        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus!
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque
          optio hic architecto error illo odit cumque voluptate a laboriosam
          iste, repellendus dolor fugit veritatis quos ab aperiam consectetur
          natus! atque optio hic architecto error illo odit cumque voluptate a
          laboriosam iste, repellendus dolor fugit veritatis quos ab aperiam
          consectetur natus!
        </h1>
      </div>
    ),
  },
  {
    path: "blog",
    element: (
      <div>
        <Navbar />
        <h1>Blogs</h1>
      </div>
    ),
  },
]);

export default router;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import ProjectData from "./Context/ProjectData";
import router from "./Routers/Routers";

function App() {
  return (
    <div>
      <ProjectData>
        <RouterProvider router={router} />
      </ProjectData>
    </div>
  );
}

export default App;

import { createBrowserRouter ,RouterProvider} from "react-router";
import Home from "./Home"

const Body=()=>{
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default Body;
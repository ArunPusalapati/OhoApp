import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body"

import ReactDOM from "react-dom/client"
const App=()=>{
   return (
    <div>
     <Body/>
    </div>
   );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />) 




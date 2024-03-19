import "./App.css"



import {
  createBrowserRouter, 
  createRouterFromElements, 
  Route,
  RouterProvider
 } from "react-router-dom";

import Main from "./Components/Home/Main";

function App() {
  //manages the routing configuration for the application
const router = createBrowserRouter(
  //create the route from the elements passed to it 
  createRouterFromElements(
    //defines a route component that matchs all paths "/" and renders the main component
    <Route path="/" element = {<Main/>} exact ></Route>
    //exact properties ensure that the route macthes exactly what u give in path
  )
)

  return (
    <div className="App">
      {/* comment : [shortcut :cntr+? ]  
      this ensures that the router functionality is available throught the application 
      */}
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";
import Form from "./Components/Form.js";
import Sign from "./Components/Sign.js";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return(
        <div>
            <Outlet/>
        </div>
    )
}

const AppRoute = createBrowserRouter([
    {
        path:"/",
        element: [<Header/>,<Home/>,<About/>,<Footer/>],
    },
    {
        path:"/about",
        element: [<Header/>,<Home/>,<About/>,<Footer/>],
    },
    {
        path:"/sign",
        element:<Sign/>
    },
    {
        path:"/form",
        element:[<Header/>,<Form/>,<Footer/>]
    }
])

root.render(<RouterProvider router={AppRoute}/>)
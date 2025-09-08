import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/projects',
                element: <Projects/>
            }
        ]
    }
])
function App() {


    return <RouterProvider router={router} />
}

export default App
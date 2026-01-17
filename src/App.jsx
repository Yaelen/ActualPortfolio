import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import TProjects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

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
                element: <TProjects/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])
function App() {
    return <RouterProvider router={router} />
}

export default App
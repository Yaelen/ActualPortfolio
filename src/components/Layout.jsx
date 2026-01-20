import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Layout() {
    const location = useLocation();
    return (
        <div className={"main-content flex  min-h-screen"}>
            <section className="w-1/4 p-4 flex items-center justify-center">
                <Navbar />
            </section>
            <main className=" w-3/4 p-8 flex items-center justify-center text-white">
                <div key={location.pathname} className="page-enter w-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default Layout;

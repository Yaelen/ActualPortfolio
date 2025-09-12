import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Layout() {
    return (
        <div className={"main-content flex  min-h-screen [cursor:url('./assets/images/custom-cursor.png')_16_16,auto]"}>
            <section className="w-1/4 p-4 flex items-center justify-center">
                <Navbar />
            </section>
            <main className=" w-3/4 p-8 flex items-center justify-center text-white">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;

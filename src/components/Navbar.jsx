import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function Navbar() {
    return (
        <nav className="fixed top-0 h-screen w-25 animate-fade-in z-50 flex items-center">
        <ul className="nav-bar flex flex-col gap-4 p-4">
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `custom-button ${isActive ? "active-button" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `custom-button ${isActive ? "active-button" : ""}`
                        }
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `custom-button ${isActive ? "active-button" : ""}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}


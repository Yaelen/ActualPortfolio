import React from 'react';
import '../index.css';

function Navbar() {
    return (
        <nav>
            <ul className={"flex flex-col gap-4 p-4"}>
                <li>
                    <a href="/" className="custom-button">Home</a>
                </li>
                <li>
                    <a href="/projects" className="custom-button">Projects</a>
                </li>
                <li>
                    <a href="/contact" className="custom-button">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

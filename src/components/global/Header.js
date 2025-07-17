import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="nav-container">
                <h1 className="logo">MyPortfolio</h1>

                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>

                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#skills-detail">Projects</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#information">information</a></li>
                        <li><a href="#Archiving">Archiving</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

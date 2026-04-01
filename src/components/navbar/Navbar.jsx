import "./Navbar.css";
import buscavida_text from "../../assets/images/busca-vida-text.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar-section">
            <div className="sfondo-legno"></div>

            <div className="navbar">
                <div className="logo-container">
                    <NavLink to="/buscavida" onClick={() => setOpen(false)}>
                        <img
                            src={buscavida_text}
                            alt="Logo Busca Vida"
                            className="logo-image"
                        />
                    </NavLink>
                </div>

                <a href="tel:+393513478565" className="button-prenota display-mobile">
                    PRENOTA ORA
                </a>

                <div className="menu-container">
                    <div
                        className={`hamburger ${open ? "open" : ""}`}
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`navbar-menu ${open ? "open" : ""}`}>
                        <li>
                            <NavLink
                                to="/buscavida"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `navbar-link ${isActive ? "active" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/menu"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `navbar-link ${isActive ? "active" : ""}`
                                }
                            >
                                Menu
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/gallery"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `navbar-link ${isActive ? "active" : ""}`
                                }
                            >
                                Gallery
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contatti"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `navbar-link ${isActive ? "active" : ""}`
                                }
                            >
                                Contatti
                            </NavLink>
                        </li>

                        <li>
                            <a href="tel:+393513478565" className="button-prenota display-full-screen">
                                PRENOTA ORA
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
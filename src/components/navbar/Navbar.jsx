import "./Navbar.css";
import buscavida_text from "../../assets/images/busca-vida-text.png";
import {useState} from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar-section">
            <div className={"sfondo-legno"}></div>
            <div className={"navbar"}>
                <div className="logo-container">
                    <img src={buscavida_text} alt="Logo Busca Vida" className="logo-image" />
                </div>
                <a href="tel:+393513478565" className={"button-prenota display-mobile"}>PRENOTA ORA</a>
                <div className="menu-container">
                    {/* HAMBURGER */}
                    <div
                        className={`hamburger ${open ? "open" : ""}`}
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`navbar-menu ${open ? "open" : ""}`}>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Gallery</li>
                        <li>Contatti</li>
                        <li><a href="tel:+393513478565" className={"button-prenota display-full-screen"}>PRENOTA ORA</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
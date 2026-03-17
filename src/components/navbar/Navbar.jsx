import "./Navbar.css";
import logo_image from "../../assets/images/logo.png";
import {useState} from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo_image} alt="Logo Busca Vida" className="logo-image" />
                <div className="logo-text">
                    <h1 className="logo-text-busca">Busca</h1>
                    <h1 className="logo-text-vida">Vida</h1>
                </div>
            </div>

            <div className="menu-container">
                <h1 className={"textTelephoneLong"}>Chiama ora il <a href="tel:+393513478565">+39 351 3478565</a> per prenotare un tavolo!</h1>
                <h1 className={"textTelephoneShort"}><a href="tel:+393513478565">+39 351 3478565</a></h1>
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
                </ul>
            </div>
        </nav>
    );
}
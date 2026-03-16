import "./Navbar.css";
import logo_image from "../../assets/images/logo.png";

export default function Navbar() {
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
                <ul className="navbar-menu">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contatti</li>
                </ul>
            </div>
        </nav>
    );
}
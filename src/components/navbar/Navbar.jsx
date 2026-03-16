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
                <h1>Chiama ora il <a href="tel:+393513478565">+39 351 3478565</a> per prenotare un tavolo!</h1>
                <ul className="navbar-menu">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Gallery</li>
                    <li>Contatti</li>
                </ul>
            </div>
        </nav>
    );
}
import menuPdf from "../../assets/documents/BUSCA-VIDA-MENU.pdf";
import "./MenuPdfButton.css";

export default function MenuPdfButton() {
    return (
        <div className="menu-pdf-wrapper">
            <a
                href={menuPdf}
                target="_blank"
                rel="noreferrer"
                className="menu-pdf-button"
            >
                Apri il menu PDF
            </a>
        </div>
    );
}
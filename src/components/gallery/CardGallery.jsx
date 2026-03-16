import "./CardGallery.css"
import PizzeCard from "../card/PizzeCard";
import pizzaclassica from "../../assets/images/pizza-classica.png";
import pizzaBianca from "../../assets/images/pizza-bianca.png";
import pizzaSpeciale from "../../assets/images/pizza-speciale.png";

export default function CardGallery() {
    let fastMenu = [
        {
            title: "Pizze Rosse",
            imgUrl: pizzaclassica
        },
        {
            title: "Pizze Bianche",
            imgUrl: pizzaBianca
        },
        {
            title: "Pizze Speciali",
            imgUrl: pizzaSpeciale
        }
    ]
    return (
        <div className={"card-gallery-container"}>
            <section className="gallery-container">
                {fastMenu.map((item, index) => (
                    <div className="gallery-item" key={index}>
                        <PizzeCard title={item.title} imgUrl={item.imgUrl}/>
                    </div>
                ))}
            </section>
            <button className={"btn-view-menu"}>Vedi il menu</button>
        </div>
    );
}
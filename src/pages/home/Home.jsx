import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import AboutPizzeria from "../../components/AboutPizzeria";
import MenuLinks from "../../components/MenuLinks";
import CardGallery from "../../components/gallery/CardGallery";
import ContactInfo from "../../components/ContactInfo";
import Footer from "../../components/footer/Footer";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import pizzaImage from "../../assets/images/pizza-dx.jpeg";
import pizzeriaImage from "../../assets/images/pizzeria-interno3.jpeg";
import "./Home.css";

export default function Home() {
    return (
        <>  <div className="home-container">
                <Navbar />
                <main>
                    <HeroBanner image={pizzaImage} button="View Menu" />
                    <Hero title="Busca Vida"/>
                    {/*<HeroBanner image={pizzeriaImage} button="Learn More" />*/}
                    <div className="pizzeria-image-container"><img src={pizzeriaImage} alt="Pizzeria interna" className="pizzeria-image"/></div>
                    <Hero title="Le Nostre Pizze" subtitle="none" />
                    <CardGallery />
                    {/*<AboutPizzeria />*/}
                    {/*<MenuLinks />*/}
                    {/*<ContactInfo />*/}
                </main>
                <Footer />
            </div>
        </>
    );
}
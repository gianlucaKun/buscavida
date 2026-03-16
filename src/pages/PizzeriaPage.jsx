import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutPizzeria from "../components/AboutPizzeria";
import MenuLinks from "../components/MenuLinks";
import Gallery from "../components/gallery/Gallery";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import HeroBanner from "../components/heroBanner/HeroBanner";
import pizzaImage from "../assets/images/pizza-dx.jpeg";
import pizzeriaImage from "../assets/images/pizzeria-interno.jpeg";

export default function PizzeriaPage() {
    return (
        <>
            <Navbar />
            <main>
                <HeroBanner image={pizzaImage} button="View Menu" />
                <Hero title="Pizzeria a Cecina con forno a legna" phone="+39 xxxxxxxx" />
                <HeroBanner image={pizzeriaImage} button="Learn More" />
                <AboutPizzeria />
                <Gallery />
                <MenuLinks />
                <ContactInfo />
            </main>
            <Footer />
        </>
    );
}
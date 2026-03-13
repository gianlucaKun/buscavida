import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import AboutPizzeria from "../components/AboutPizzeria";
import MenuLinks from "../components/MenuLinks";
import Gallery from "../components/Gallery";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

export default function PizzeriaPage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero title="Pizzeria a Cecina con forno a legna" phone="+39 1234567890" />
                <AboutPizzeria />
                <MenuLinks />
                <Gallery />
                <ContactInfo />
            </main>
            <Footer />
        </>
    );
}
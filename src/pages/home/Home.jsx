import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
// import CardGallery from "../../components/gallery/CardGallery";
import Footer from "../../components/footer/Footer";
// import HeroBanner from "../../components/heroBanner/HeroBanner";
// import pizzaImage from "../../assets/images/pizza-dx.jpeg";
import pizzeriaImage from "../../assets/images/pizzeria-interno3.jpeg";
import "./Home.css";
import LinkSection from "../../components/LinkSection/LinkSection";
import Gallery from "../../components/gallery/Gallery";

export default function Home() {
    return (
        <>  <div className="home-container">
                <Navbar />
                <main>
                    <Hero title="Busca Vida"/>
                    <LinkSection />
                    <Gallery />
                    {/*<div className="pizzeria-image-container"><img src={pizzeriaImage} alt="Pizzeria interna" className="pizzeria-image"/></div>*/}
                    {/*<CardGallery />*/}
                    {/*<AboutPizzeria />*/}
                    {/*<MenuLinks />*/}
                    {/*<ContactInfo />*/}
                </main>
                <Footer />
            </div>
        </>
    );
}
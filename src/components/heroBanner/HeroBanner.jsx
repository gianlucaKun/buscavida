import "./HeroBanner.css";

export default function HeroBanner({ image, button }) {
    return (
        <section
            className="hero-banner"
            style={{ backgroundImage: `url(${image})` }}
        >
            <button className="hero-button">
                {button}
            </button>
        </section>
    );
}
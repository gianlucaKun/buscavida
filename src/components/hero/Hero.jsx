import './Hero.css';
import lineaDx from '../../assets/images/linea-dx.png';
import lineaSx from '../../assets/images/linea-sx.png';
export default function Hero({ title, subtitle }) {
    const hiddenStyle = { display: subtitle };
    const subtitleText = "Pizza croccante, impasto leggero e forno rovente.";

    return (
        <section className="hero-container">
            <div className="hero-title-container">
                <img src={lineaSx} alt="Linea sx" className="linea-sx" />
                <h1 className="hero-title">{title}</h1>
                <img src={lineaDx} alt="Linea dx" className="linea-dx" />
            </div>

            <h2 className="hero-subtitle" style={hiddenStyle}>
                {subtitleText}
            </h2>
            {/*<a href={`tel:${phone}`}>Chiama ora {phone}</a>*/}
        </section>
    );
}

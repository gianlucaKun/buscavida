import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">ESPLORA IL GUSTO</h1>

                <div className="hero-badge">
                    <span>PIZZA</span>
                    <span>•</span>
                    <span>SCHIACCIATINO</span>
                    <span>•</span>
                    <span>BIRRA</span>
                </div>

                <p className="hero-subtitle">
                    Pizza croccante, impasto leggero e forno rovente.
                </p>

                <button className="hero-button">SCOPRI DI PIÙ</button>
            </div>
        </section>
    );
}
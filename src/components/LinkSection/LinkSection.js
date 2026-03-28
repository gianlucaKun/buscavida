import React from 'react';
import './LinkSection.css';

export default function LinkSection() {
    return (
        <section className="link-section-container">
            <ul className="link-section-list">
                <li className="link-card">
                    <h3>CHI SIAMO</h3>
                    <p>La nostra storia</p>
                    <button>SCOPRI</button>
                </li>

                <li className="link-card">
                    <h3>IL NOSTRO MENU</h3>
                    <p>Scopri le nostre specialità</p>
                    <button>VEDI MENU</button>
                </li>

                <li className="link-card">
                    <h3>PRENOTA UN TAVOLO</h3>
                    <p>Riserva il tuo posto</p>
                    <button className="primary">PRENOTA</button>
                </li>
            </ul>
        </section>
    );
}
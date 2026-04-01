import React from 'react';
import './LinkSection.css';
import {NavLink} from "react-router-dom";

export default function LinkSection() {
    return (
        <section className="link-section-container">
            <ul className="link-section-list">
                <li className="link-card display-full-screen">
                    <h3>CHI SIAMO</h3>
                    <p>La nostra storia</p>
                    <button>SCOPRI</button>
                </li>

                <li className="link-card">
                    <h3>IL NOSTRO MENU</h3>
                    <p>Scopri le nostre specialità</p>
                    <button><NavLink
                        to="/menu"
                        className="button-link"
                    >
                        VEDI MENU
                    </NavLink></button>
                </li>

                <li className="link-card">
                    <h3>PRENOTA UN TAVOLO</h3>
                    <p>Riserva il tuo posto</p>
                    <button className="primary"><a href="tel:+393513478565" className="button-link-prenota">
                        PRENOTA
                    </a></button>
                </li>
            </ul>
        </section>
    );
}
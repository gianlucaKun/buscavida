import { useEffect, useRef } from 'react';
import './Gallery.css';

const images = [
    'rucola',
    'locale',
    'bianca',
    'comanda',
    'rossorelativo'
];

export default function Gallery() {
    const sliderRef = useRef(null);
    const animationRef = useRef(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const step = () => {
            if (!slider || isPausedRef.current) {
                animationRef.current = requestAnimationFrame(step);
                return;
            }

            slider.scrollLeft += 0.6;

            const halfWidth = slider.scrollWidth / 2;
            if (slider.scrollLeft >= halfWidth) {
                slider.scrollLeft = 0;
            }

            animationRef.current = requestAnimationFrame(step);
        };

        animationRef.current = requestAnimationFrame(step);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const duplicatedImages = [...images, ...images];

    return (
        <section className="gallery-container">
            <h2 className="gallery-title">GALLERY</h2>

            <div
                className="gallery-slider-wrapper"
                onMouseEnter={() => { isPausedRef.current = true; }}
                onMouseLeave={() => { isPausedRef.current = false; }}
                onTouchStart={() => { isPausedRef.current = true; }}
                onTouchEnd={() => { isPausedRef.current = false; }}
            >
                <div className="gallery-slider" ref={sliderRef}>
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={`${image}-${index}`}
                            className={`gallery-card ${image}`}
                        />
                    ))}
                </div>
            </div>

            <button className="gallery-button">VEDI TUTTE LE FOTO</button>
        </section>
    );
}
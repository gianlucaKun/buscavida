export default function Hero({ title, phone }) {
    return (
        <section>
            <h1>{title}</h1>
            <a href={`tel:${phone}`}>Chiama ora {phone}</a>
        </section>
    );
}
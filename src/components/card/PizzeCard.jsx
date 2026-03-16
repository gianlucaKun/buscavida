export default function PizzeCard({ title, imgUrl }) {
    return (
        <div className="pizza-card">
            <img src={imgUrl} alt={title} className="pizza-img" />
            <h3 className="pizza-title">{title}</h3>
        </div>
    );
}
import "./MenuItem.css";

export default function MenuItem({ item }) {
    return (
        <article className="menu-item">
            <div className="menu-item-top">
                <h3>{item.name}</h3>
                <span className="menu-item-price">{item.price}</span>
            </div>
            <p>{item.description}</p>
        </article>
    );
}
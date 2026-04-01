import MenuItem from "./MenuItem";
import "./MenuCategory.css";

export default function MenuCategory({ title, items }) {
    return (
        <section className="menu-category container">
            <div className="menu-category-header">
                <h2>{title}</h2>
            </div>

            <div className="menu-category-grid">
                {items.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </div>
        </section>
    );
}
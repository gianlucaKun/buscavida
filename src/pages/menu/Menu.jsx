import "./Menu.css";
import Navbar from "../../components/navbar/Navbar";
import MenuCategory from "../../components/menu/MenuCategory";
import MenuPdfButton from "../../components/menu/MenuPdfButton";
import { menuData } from "../../components/menu/menuData";
import Footer from "../../components/footer/Footer";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

const categoryButtons = [
    { id: "all", label: "Tutte" },
    { id: "classiche", label: "Classiche" },
    { id: "bianche", label: "Bianche" },
    { id: "particolari", label: "Speciali" },
    { id: "schiacciatini", label: "Schiacciatini" },
];

const extraFilterButtons = [
    { id: "vegetariana", label: "Vegetariane" },
    // { id: "calzone", label: "Calzone" },
    { id: "piccante", label: "Piccanti" },
    { id: "pesce", label: "Pesce" },
    { id: "carne", label: "Carne" },
];

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeExtraFilters, setActiveExtraFilters] = useState([]);
    const [isExtraFiltersOpen, setIsExtraFiltersOpen] = useState(false);

    const toggleExtraFilter = (filterId) => {
        setActiveExtraFilters((prev) =>
            prev.includes(filterId)
                ? prev.filter((item) => item !== filterId)
                : [...prev, filterId]
        );
    };

    const filteredMenu = useMemo(() => {
        let categories =
            activeCategory === "all"
                ? menuData
                : menuData.filter((category) => category.id === activeCategory);

        return categories
            .map((category) => {
                const filteredItems =
                    activeExtraFilters.length === 0
                        ? category.items
                        : category.items.filter((item) => {
                            const itemTags = item.tags || [];
                            return activeExtraFilters.every((filter) =>
                                itemTags.includes(filter)
                            );
                        });

                return {
                    ...category,
                    items: filteredItems,
                };
            })
            .filter((category) => category.items.length > 0);
    }, [activeCategory, activeExtraFilters]);

    return (
        <>
            <Navbar />

            <main className="menu-page">
                <section className="menu-intro container">
                    <h2 id={"menu-page-title"}>Il nostro Menu</h2>
                    <p>
                        Pizze classiche, bianche, particolari e schiacciatini.
                        Scopri tutte le nostre specialità.
                    </p>
                    <MenuPdfButton />
                </section>

                <section className="menu-filters-wrapper container">
                    <div className="menu-filters">
                        {categoryButtons.map((button) => (
                            <button
                                key={button.id}
                                type="button"
                                className={`menu-filter-button ${
                                    activeCategory === button.id ? "active" : ""
                                }`}
                                onClick={() => {
                                    setActiveCategory(button.id);
                                    setIsExtraFiltersOpen(false);
                                }}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>

                    <div className="menu-extra-filters-block">
                        <div className="menu-extra-filters-header">
                            <button
                                type="button"
                                className={`menu-extra-toggle ${isExtraFiltersOpen ? "open" : ""}`}
                                onClick={() => setIsExtraFiltersOpen((prev) => !prev)}
                            >
                                <SlidersHorizontal size={18} />
                                <span>Filtri</span>

                                {activeExtraFilters.length > 0 && (
                                    <span className="menu-extra-count">{activeExtraFilters.length}</span>
                                )}
                            </button>

                            {activeExtraFilters.length > 0 && (
                                <button
                                    type="button"
                                    className="menu-reset-filters"
                                    onClick={() => setActiveExtraFilters([])}
                                >
                                    Reset
                                </button>
                            )}
                        </div>

                        {isExtraFiltersOpen && (
                            <div className="menu-extra-panel">
                                <div className="menu-extra-filters">
                                    {extraFilterButtons.map((button) => (
                                        <button
                                            key={button.id}
                                            type="button"
                                            className={`menu-filter-pill ${
                                                activeExtraFilters.includes(button.id) ? "active" : ""
                                            }`}
                                            onClick={() => toggleExtraFilter(button.id)}
                                        >
                                            {button.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {filteredMenu.length > 0 ? (
                    filteredMenu.map((category) => (
                        <MenuCategory
                            key={category.id}
                            title={category.title}
                            items={category.items}
                        />
                    ))
                ) : (
                    <section className="container menu-empty-state">
                        <p>Nessun elemento trovato con questi filtri.</p>
                    </section>
                )}
            </main>

            <Footer />
        </>
    );
}
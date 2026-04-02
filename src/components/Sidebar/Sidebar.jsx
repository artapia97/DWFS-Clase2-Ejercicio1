import "./Sidebar.css";
import GenreList from "./GenreList.jsx";
import {genres} from "../../data/movies.js";

export default function Sidebar({ genres, featuredMovie }) {
    return (
        <aside className="sidebar">
            <section className="sidebar__section">
                <h3 className="sidebar__title">Filtrar por género</h3>
                <GenreList genres={genres} />
            </section>

            <section className="sidebar__section sidebar__featured">
                <h3 className="sidebar__title">Destacado del mes</h3>
                <div className="sidebar__featured-card">
                    <span className="sidebar__featured-emoji">{featuredMovie.image}</span>
                    <p className="sidebar__title">{featuredMovie.title}</p>
                    <p className="sidebar__featured-genre">{featuredMovie.genre}</p>
                    <p className="sidebar__featured-rating">
                        ⭐ {featuredMovie.rating}
                    </p>
                </div>
            </section>
        </aside>
    )
}
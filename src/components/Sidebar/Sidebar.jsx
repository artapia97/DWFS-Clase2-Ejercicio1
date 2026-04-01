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
                <h3>Destacado del mes</h3>
                <div className="sidebar__featured">
                    <span>{featuredMovie.image}</span>
                    <p>{featuredMovie.title}</p>
                    <p>{featuredMovie.genre}</p>
                    <p>
                        ⭐ {featuredMovie.rating}
                    </p>
                </div>
            </section>
        </aside>
    )
}
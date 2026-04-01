import "./MovieGrid.css";
import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ movies }) {
    return (
        <section className="MovieGrid">
            <h2>Estrenos de la semana</h2>
            <div>
                {
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </section>
    );
}
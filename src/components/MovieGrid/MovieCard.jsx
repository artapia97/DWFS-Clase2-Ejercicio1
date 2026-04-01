import "./MovieCard.css";

export default function MovieCard({ movie }) {
    const { image, title, year, description, genre, rating } = movie;

    return (
        <article className="movie-card">
            <div className="movie-card__header">
                <span>{image}</span>
                <span>{year}</span>
            </div>
            <div className="movie-card__body">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="movie-card__footer">
                    <span>{genre}</span>
                    <span>{rating}</span>
                </div>
                <button>Ver más</button>
            </div>
        </article>
    );
}
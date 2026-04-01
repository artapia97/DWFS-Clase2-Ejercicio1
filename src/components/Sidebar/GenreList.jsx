import "./Sidebar.css";

export default function GenreList({ genres }) {
    return (
        <ul>
            {genres.map(genre => (
                <li key={genre} className="genre-list__item">
                    <span className="genre-list__dot" />
                    {genre}
                </li>
            ))}
        </ul>
    )
}


export default function GenreList({ genres }) {
    return (
        <ul>
            {genres}.map(genre => (
                <li>
                    <span className="genre-list__dot" />
                    {genre}
                </li>
            ))
        </ul>
    )
}
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import PageLayout from "./components/PageLayout/PageLayout.jsx";
import { movies, genres } from "./data/movies.js";
import MovieGrid from "./components/MovieGrid/MovieGrid.jsx";
import Footer from "./components/Footer/Footer.jsx";

const navLinks = [
    { label: "Inicio", href: "#" },
    { label: "Estrenos", href: "#" },
    { label: "Géneros", href: "#" },
    { label: "Contacto", href: "#" },
];

const featuredMovie = movies[0];

export default function App() {
    return (
        <div className="app">
            <Navbar links={navLinks} />
            <PageLayout genres={genres} featuredMovie={featuredMovie}  />
            <MovieGrid movies={movies} />
            <Footer year={2026}/>
        </div>
    );
}

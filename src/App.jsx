import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";

const navLinks = [
    { label: "Inicio", href: "#" },
    { label: "Estrenos", href: "#" },
    { label: "Géneros", href: "#" },
    { label: "Contacto", href: "#" },
];

export default function App() {
    return (
        <div className="app">
            <Navbar links={navLinks} />
        </div>
    );
}

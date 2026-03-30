import "./Navbar.css";

export default function Navbar({ links }) {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <span>CineReact</span>
            </div>
            <ul className="navbar__links">
                {links.map((link) => (
                    <li key={link.label}>
                        <a className="navbar__link" href={link.href}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
import "./Footer.css"

export default function Footer({ year }) {
    return (
        <footer className="footer">
            <p>{year} <strong>CineReact</strong> . Todos los derechos reservados</p>
            <p>Hecho con amor y con React</p>
        </footer>
    );
}
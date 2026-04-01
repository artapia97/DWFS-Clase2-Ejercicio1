import "./PageLayout.css";
import "../Sidebar/Sidebar.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

export default function PageLayout({ genres, featuredMovie, children }) {
    return (
        <div>
            <Sidebar genres={genres} featuredMovie={featuredMovie}/>
            <main>{children}</main>
        </div>
    )
}
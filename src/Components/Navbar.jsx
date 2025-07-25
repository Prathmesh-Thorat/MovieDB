import { Link } from "react-router-dom";
import "../Css/Navbar.css"
function Navbar()
{
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to = "/">Movie DB</Link>
        </div>
        <div className="nav-links">
            <Link to = "/" className="nav-link">Home</Link>
            <Link to = "/favorites" className="nav-link">Watchlist</Link>
        </div>
    </nav>
}
export default Navbar
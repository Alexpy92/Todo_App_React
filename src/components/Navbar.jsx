import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <h2>Todo App</h2>
            <ul>
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active" : ''}>
                    Todas las Tareas
                    </Link>
                </li>
                <li>
                    <Link
                    to="/completadas"
                    className={location.pathname === "/completadas" ? "active" : ''}
                    >
                    Completadas
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
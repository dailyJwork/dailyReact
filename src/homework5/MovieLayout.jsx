import { Outlet, Link } from "react-router-dom";

export default function MovieLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

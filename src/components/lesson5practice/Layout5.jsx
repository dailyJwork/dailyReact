import { NavLink, Outlet } from "react-router-dom";

export default function Layout5() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

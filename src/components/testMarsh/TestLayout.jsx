import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export default function TestLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
        </ul>
      </nav>
      <Suspense
        fallback={
          <>
            <b>Loading...</b>
          </>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}

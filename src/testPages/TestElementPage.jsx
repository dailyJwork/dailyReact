import { useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import TestCollection from "./TestCollection";

export default function TestElementPage() {
  const { element } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/collection");

  return (
    <div>
      <h4>{element}</h4>
      <ul>
        <li>
          <Link to="gallery">Element gallery</Link>
        </li>
        <li>
          <Link to="info">Element info</Link>
        </li>
      </ul>
      <Outlet />
      <Link to={backLinkLocationRef.current} element={<TestCollection />}>
        <button>Back</button>
      </Link>
    </div>
  );
}

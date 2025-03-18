import { Link, Outlet, useParams } from "react-router-dom";

export default function ElmenentDetails() {
  const { element } = useParams();

  return (
    <div>
      <h5>Element details: {element}</h5>
      <ul>
        <li>
          <Link to="gallery">Element gallery</Link>
        </li>
        <li>
          <Link to="info">Element info</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}

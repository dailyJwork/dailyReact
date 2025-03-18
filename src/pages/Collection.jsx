import { Link } from "react-router-dom";

export default function Collection() {
  return (
    <div>
      <h4>Collection of elements</h4>
      <ul>
        {[
          { name: "mops", id: 1 },
          { name: "labrador", id: 2 },
          { name: "haski", id: 3 },
          { name: "taksa", id: 4 },
        ].map((el) => {
          return (
            <Link key={el.id} to={`${el.name}`}>
              DOG: {el.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

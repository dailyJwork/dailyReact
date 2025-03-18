import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function TestCollection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dogName = searchParams.get("dog") ?? "";
  const [dogs, setDogs] = useState([
    { name: "dog-1", id: "1" },
    { name: "dog-2", id: "2" },
    { name: "dog-3", id: "3" },
  ]);
  const location = useLocation();

  const visibleDogs = dogs.filter(({ name }) => {
    return name.includes(dogName);
  });

  const updateQuerySrtingValue = (event) => {
    if (event.target.value === "") {
      return setSearchParams({});
    }
    setSearchParams({ dog: event.target.value });
  };

  return (
    <div>
      <h4>Collection</h4>
      <input
        type="text"
        placeholder="Search"
        name="searchInput"
        value={dogName}
        onChange={updateQuerySrtingValue}
      />
      {visibleDogs.map(({ name, id }) => {
        return (
          <Link key={id} to={`${name}`} state={{ from: location }}>
            <p>DOG: {name}</p>{" "}
          </Link>
        );
      })}
    </div>
  );
}

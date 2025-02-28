import { StatiscitsItem } from "./StatiscitcItem";

export const StatiscitsList = ({ data }) => {
  return (
      <ul>
        <h2>Statiscits</h2>
        {data.map((el) => {
          return (
              <li key={el.id}>
                <StatiscitsItem data={el} />
              </li>
          );
        })}
      </ul>
  );
};

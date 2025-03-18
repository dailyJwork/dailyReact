import userData from "./hw1json.json";
import statsData from "./stats.json";

export const HooksProfile = () => {
  const { name, age, followers, likes, location } = userData;

  return (
    <div>
      <h4>Profile</h4>
      <h5>{name}</h5>
      <p>{age}</p>
      <p>{followers}</p>
      <p>{likes}</p>
      <p>{location}</p>
    </div>
  );
};

export const StatisticsHooks = () => {
  return (
    <div>
      <h4>Stats</h4>
      {statsData.map(({ id, title, persent }) => {
        return (
          <li key={id}>
            <h4>{title}</h4>
            <p>{persent}</p>
          </li>
        );
      })}
    </div>
  );
};

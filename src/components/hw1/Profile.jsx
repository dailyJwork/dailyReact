import css from "../hw1/Profile.module.css";

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
  return (
    <div className={css.container}>
      <div className={css.firstSideContainer}>
        <img
          src={image}
          alt={name}
          className={css.profileImg}
        />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileTag}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span className={css.statsTitle}>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.statsTitle}>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.statsTitle}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

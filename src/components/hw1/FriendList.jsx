import friendList from "./friendsList.json";
import css from "../hw1/FriendsTask.module.css"
import clsx from "clsx";

function FriendList({friends}) {
  return (
    <ul className={css.friendsList}>
      {friends.map((el) => {
        return (
          <li key={el.id}>
            <FriendItem data={el} />
          </li>
        );
      })}
    </ul>
  );
}

const FriendItem = ({ data: { avatar, name, isOnline } }) => {
    const Online = clsx(
        isOnline ? css.isOnline : css.Offline
    )

  return (
    <div className={css.friendsListItem}>
      <img src={avatar} alt="Avatar" className={css.friendsImg} />
      <p className={css.friendsName}>{name}</p>
      <p className={Online}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export const FriendsTask = () => {
    return (
        <>
        <FriendList friends = {friendList} />
        </>
    )
}
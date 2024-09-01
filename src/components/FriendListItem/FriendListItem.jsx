import clsx from "clsx";
import s from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendItem}>
      <img src={avatar} alt="Avatar" width="100" />
      <p>{name}</p>
      <p className={clsx(isOnline ? s.greenOnline : s.redOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

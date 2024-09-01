import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <div className={s.cardWrapper}>
          <img src={image} alt="User avatar" />
          <p className={s.userName}>{name}</p>
          <p className={s.userInfo}>@{tag}</p>
          <p className={s.userInfo}>{location}</p>
        </div>

        <ul className={s.listStats}>
          <li>
            <span>Followers</span>
            <span> {stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span> {stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

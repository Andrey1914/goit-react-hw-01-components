import PropTypes from 'prop-types';
import style from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <section className="section">
      <div className="container">
        <div className={style.profile}>
          <div className={style.description}>
            <img
              src={avatar}
              alt="User avatar"
              className={style.avatar}
              width="100"
              height="100"
            />
            <p className={style.name}>{username}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
          </div>
          <ul className={style.stats}>
            <li className={style.item}>
              <span className={style.label}>Followers</span>
              <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li className={style.item}>
              <span className={style.label}>Views</span>
              <span className={style.quantity}>{stats.views}</span>
            </li>
            <li className={style.item}>
              <span className={style.label}>Likes</span>
              <span className={style.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

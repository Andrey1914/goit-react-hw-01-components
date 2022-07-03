import PropTypes from 'prop-types';
import style from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.isOnline : style.isOffline}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

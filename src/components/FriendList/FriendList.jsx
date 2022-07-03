import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import style from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <section className="section">
      <div className="container">
        <ul className={style.friendList}>
          {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

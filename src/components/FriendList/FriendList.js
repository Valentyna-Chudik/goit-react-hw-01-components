import PropTypes from 'prop-types';
import Friend from './Friend';
import styles from './FriendList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

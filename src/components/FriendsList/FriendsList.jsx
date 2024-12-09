import styles from './FriendsList.module.css';
import clsx from 'clsx';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(friend => {
        return (
          <li className={styles.friendItem} key={friend.id}>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="Avatar"
              width="48"
            />
            <p className={styles.friendName}>{friend.name} </p>
            <p
              className={clsx(
                friend.isOnline ? styles.clrStatusGreen : styles.clrStatusRed
              )}
            >
              {friend.isOnline ? 'online' : 'offline'}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;

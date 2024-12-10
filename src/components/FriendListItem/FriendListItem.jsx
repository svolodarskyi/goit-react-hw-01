import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ friend }) => {
  return (
    <div>
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
    </div>
  );
};

export default FriendListItem;

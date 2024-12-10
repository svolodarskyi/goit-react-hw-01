import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(friend => {
        return (
          <li className={styles.friendItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

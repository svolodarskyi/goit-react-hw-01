import userData from './assets/userData.json';
import friends from './assets/friends.json';
import Profile from './components/Profile/Profile';
import Friendslist from './components/FriendsList/FriendsList';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Friendslist friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </>
  );
};

export default App;

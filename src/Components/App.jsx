// Components
import FriendList from './FriendList/FriendList';
import ProfileList from './ProfileList/ProfileList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

// JSON
import user from './ProfileList/user.json';
import friends from './FriendList/friends.json';
import items from './TransactionHistory/transactions.json';

function App() {
  return (
    <div>
      <ProfileList userData={user} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;

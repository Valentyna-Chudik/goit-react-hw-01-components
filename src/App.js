import Profile from './components/Profile/Profile';
import userData from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statData from './components/Statistics/statistical-data.json';

import FriendsList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

import Container from './components/Container/Container';

export default function App() {
  return (
    <div>
      <Container>
        <Profile
          avatar={userData.avatar}
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          stats={userData.stats}
        />

        <Statistics title="Upload stats" stats={statData} />

        <FriendsList friends={friends} />

        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

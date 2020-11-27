import Profile from './components/Profile/Profile';
import userData from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statData from './components/Statistics/statistical-data.json';

import FriendsList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={userData.avatar}
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics title="Upload stats" stats={statData} />
      <FriendsList friends={friends} />
    </div>
  );
}

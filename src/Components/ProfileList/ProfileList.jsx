import Profile from '../Profile/Profile';
import styles from './ProfileList.module.css';

function ProfileList({ userData }) {
  return (
    <div className={styles.list}>
      {userData.map((user) => (
        <Profile
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      ))}
    </div>
  );
}

export default ProfileList;

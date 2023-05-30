import React from 'react';
import styles from '../../styles/profile.module.css';
import { useUserAuth } from '../../context/UserAuthContext';
import { auth } from '../../config/firebase';

const Profile = () => {
  const { user } = useUserAuth();
  return (
    <div className={styles.container}>
      <h1>Profile Page</h1>
      <div>
        {user ? <h2>Email: {user.email}</h2> : <h2>No user available.</h2>}
      </div>
      <div>
        {user ? (
          <h2>Mobile: {user.phoneNumber}</h2>
        ) : (
          <h2>No user available.</h2>
        )}
      </div>
      <div>
        {user ? (
          <h2>Mobile: {auth.currentUser.metadata.creationTime}</h2>
        ) : (
          <h2>No user available.</h2>
        )}
      </div>
    </div>
  );
};

export default Profile;

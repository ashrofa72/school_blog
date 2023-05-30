import React from 'react';
import styles from '../../styles/profile.module.css';
import { useUserAuth } from '../../context/UserAuthContext';
import { auth } from '../../config/firebase';

const Profile = () => {
  const { user } = useUserAuth();
  return (
    <div className={styles.container}>
      <h1>Profile Page</h1>
      <p>
        User Creation Date :{' '}
        {user ? auth.currentUser.metadata.creationTime : 'no user'}
      </p>
      <p>User Email : {user ? auth.currentUser.email : 'no user'}</p>
      <p>Mobile Number : {user ? auth.currentUser.phoneNumber : 'no user'}</p>
    </div>
  );
};

export default Profile;

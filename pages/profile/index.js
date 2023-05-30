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
        User Creation Date :
        {!user ? 'no user' : auth.currentUser.metadata.creationTime}
      </p>

      <p>User Email : {!user ? 'no user' : auth.currentUser.email}</p>
      <p>Mobile Number : {!user ? 'no user' : auth.currentUser.phoneNumber}</p>
    </div>
  );
};

export default Profile;

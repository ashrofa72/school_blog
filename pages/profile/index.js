import React from 'react';
import styles from '../../styles/profile.module.css';
import { useUserAuth } from '../../context/UserAuthContext';
import { auth } from '../../config/firebase';

const Profile = () => {
  const { user } = useUserAuth();
  return (
    <div className={styles.container}>
      <h1>Profile Page</h1>
      <div>{user ? <p>Email: {user.email}</p> : <p>No user available.</p>}</div>
    </div>
  );
};

export default Profile;

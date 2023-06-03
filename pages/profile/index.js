import React from 'react';
import styles from '../../styles/profile.module.css';
import { useUserAuth } from '../../context/UserAuthContext';
import { auth } from '../../config/firebase';

const Profile = () => {
  const { user } = useUserAuth();
  const handleuser = () => {
    const user = auth.currentUser;
    if (user) {
      const { displayName, phoneNumber } = user;
      console.log('Display Name:', displayName);
      console.log('Phone Number:', phoneNumber);
    } else {
      console.log('User not logged in');
    }
  };
  return (
    <div className={styles.container}>
      <h1 className="text-3xl text-center">بيانات تسجيل الدخول لصاحب الحساب</h1>
      <div>
        {user.email ? (
          <h2>Email: {user.email}</h2>
        ) : (
          <h2>No user email available.</h2>
        )}
      </div>
      <div>
        {user.displayName ? (
          <h2>Display Name: {user.displayName}</h2>
        ) : (
          <h2>No user display Name available.</h2>
        )}
      </div>
      <div>
        {user.phoneNumber ? (
          <h2>Mobile: {user.phoneNumber}</h2>
        ) : (
          <h2>No user Mobile available.</h2>
        )}
      </div>
    </div>
  );
};

export default Profile;

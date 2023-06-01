import { useState } from 'react';
import firebase from 'firebase/app';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import styles from '../styles/savedata.module.css';
import Link from 'next/link';

import { useUserAuth } from '../context/UserAuthContext';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [mobile, setMobile] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { user } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save form data to Firebase Realtime Database
    const formData = {
      email,
      password,
      nationalId,
      mobile,
      displayName,
    };

    // save data
    await addDoc(collection(db, 'myblog-58b10'), {
      formData,
      uid: user.uid,
    });

    // Clear form fields after submission
    setEmail('');
    setPassword('');
    setNationalId('');
    setMobile('');
    setDisplayName('');
  };

  return (
    <div className={styles.container}>
      <h1>تسجيل بيانات المستخدم الجديد</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formgroup}>
          <label>البريد الإلكتروني</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label>كلمة المرور</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label>الرقم القومي</label>
          <input
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label>التليفون</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label>اسم المستخدم</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
        <div>
          <Link href="/getdata">Get Data</Link>
        </div>
      </form>
    </div>
  );
}

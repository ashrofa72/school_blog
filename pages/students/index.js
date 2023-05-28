import React from 'react';
import styles from '../../styles/students.module.css';

import Link from 'next/link';

const Students = () => {
  return (
    <div className={styles.container}>
      <h1>Students</h1>
      <Link
        href="/students/Secondcodes"
        style={{ fontWeight: 'blod', float: 'right', marginRight: '10px' }}
      >
        الحصول على الكود الخاص بالطالب
      </Link>
    </div>
  );
};

export default Students;

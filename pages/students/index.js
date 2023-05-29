import React from 'react';
import styles from '../../styles/students.module.css';

import Link from 'next/link';

const Students = () => {
  return (
    <div className={styles.container}>
      <h1>Students</h1>
      <ul>
        <li>
          <Link
            href="/students/Secondcodes"
            style={{ fontWeight: 'blod', float: 'right', marginRight: '10px' }}
          >
            الحصول على الكود الخاص بالطالب
          </Link>
        </li>
        <li>
          <Link
            href="/students/first_result"
            style={{ fontWeight: 'blod', float: 'right', marginRight: '10px' }}
          >
            الحصول على نتيجة الطالبة الصف الأول
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Students;

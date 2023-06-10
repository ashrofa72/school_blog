import { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/teacherform.module.css';

export default function Teachers() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [position, setPosition] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the API endpoint
      const response = await axios.post('/api/addteachers', {
        name,
        mobile,
        position,
      });

      console.log('Data saved:', response.data);

      // Reset the form fields
      setName('');
      setMobile('');
      setPosition('');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  // ...

  return (
    <div className={styles.container}>
      <h1>إدخال بيانات المعلم الأساسية</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            اسم المعلم
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="mobile">
            رقم الموبايل
          </label>
          <input
            className={styles.input}
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="position">
            الوظيفة على الكادر
          </label>
          <input
            className={styles.input}
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          حفظ
        </button>
      </form>
    </div>
  );
}

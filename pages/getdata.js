import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from '../styles/getsave.module.css';

const DataList = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'myblog-58b10'));
      const dataList = [];

      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });

      setData(dataList);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className="text-4xl text-gray-500 text-center">
        بيانات المسجلين على المنصة
      </h2>
      <div className="text-center mt-5 text-xl">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>DisplayName:</strong> {item.formData.displayName},{' '}
              <strong>Email:</strong> {item.formData.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataList;

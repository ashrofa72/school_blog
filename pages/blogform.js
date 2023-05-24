import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/blogform.module.css';

const Blogform = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example validation
    if (title.trim() === '' || content.trim() === '' || image.trim() === '') {
      setErrorMessage('Please fill in all fields');
      return;
    }

    setErrorMessage('');

    try {
      // Send the form data to the API endpoint
      await axios.post('/api/blog', { title, content, image });

      // Reset the form fields after successful submission
      setTitle('');
      setContent('');
      setImage('');

      // Display a success message or redirect to another page
      console.log('Blog submitted successfully!');
    } catch (error) {
      // Handle any errors during form submission
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>انشاء محتوى او خبر جديد</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <label htmlFor="title">العنوان</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="content">المحتوى</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="image">رابط الصورة</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {errorMessage && (
          <p className={styles.error - message}>{errorMessage}</p>
        )}
        <button type="submit" className={styles.btn}>
          انشاء المحتوى
        </button>
      </form>
    </div>
  );
};

export default Blogform;

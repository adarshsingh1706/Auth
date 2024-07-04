import React, { useState } from 'react';
import axios from 'axios';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(''); //for displaying msg after login

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://authbackend-4mq2.onrender.com/api/login', formData) // on what and with what
    .then((response) => {
     
      setMessage(response.data.message);
    })
    .catch((error) => {
      
      setMessage(error.response?.data?.message || 'An error occurred');
    });
};

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} method="POST" onSubmit={handleSubmit}>
      <h1 className={styles.heading}>Login</h1>
        <div className={styles.innerForm}>

          <label>
            name:
            <input
              type="text"
              placeholder="username"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>

          <button className={styles.btn}>Login</button>

        </div>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
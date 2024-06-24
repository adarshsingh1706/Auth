import React, { useState } from 'react';
import axios from 'axios';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/api/login', formData)
      .then((response) => console.log('Login successful:', response.data))
      .catch((error) => console.error('Error during login:', error));
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} method="POST" onSubmit={handleSubmit}>
      <h1 className={styles.heading}>Login</h1>
        <div className={styles.innerForm}>
          <label>
            Username:
            <input
              type="text"
              placeholder="username"
              name="username"
              value={formData.username}
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
      </form>
    </div>
  );
}

export default LoginForm;
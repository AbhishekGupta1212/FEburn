import React, { useState } from 'react';
import '../Styles/login.css'

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState(false);

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://loginbrandwic.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.error) {
        setError(true);
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Error:', error);
    }
 };

 return (
    <>
     <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        /> 
        </div>
 <div className="login-container">
    <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
 </div>
      

        <button type="submit">Login</button>
      </form>
      {error && <p>Error: Invalid email or password</p>}
    </>
     
   
 );
};

export default Login;
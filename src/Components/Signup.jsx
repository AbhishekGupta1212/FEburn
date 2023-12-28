import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
 });

 const { name, email, password } = formData;

 const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name,
        email,
        password,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post('https://loginbrandwic.onrender.com/user/signup', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
 };

 return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength="6"
          required
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
 );
};

export default Signup;
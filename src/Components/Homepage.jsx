import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import '../Styles/homepage.css'

function HomePage() {
 const [showSignup, setShowSignup] = useState(false);

 const toggleSignup = () => {
    setShowSignup(!showSignup);
 };

 return (
    <div className="homepage">
      {showSignup ? <Signup /> : <Login />}
      <button onClick={toggleSignup}>
        {showSignup ? 'Switch to Login' : 'Switch to Signup'}
      </button>
    </div>
 );
}

export default HomePage;
import './Signup.css'
// import { useState } from "react";
import Btn from '../../UIKit/Elements/Btn/Btn';
import React, { useState } from 'react';
// import axios from 'axios';
import { useAuth } from '../../components/useAuth';

const Signup = () => {
  const { signup } = useAuth();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignup = async () => {
    try {
      
      const response = await fetch('https://64be4a645ee688b6250c2373.mockapi.io/accounts', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
       
        const userData = await response.json();
        signup(userData);
      } else {
        
      }
    } catch (error) {
      
    }
  };

  return (
    <div classname="signup">
        <h2>Signup</h2>
        <form className='signup-form' onSubmit={handleSignup}>
      
        <div>
          <label className='signup-label1'>Email:</label>
          <input className='signup-input1'
            type="email"
            
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
            
          />
        </div>
       <div>
          <label className='signup-label2'>Password:</label>
          <input className='signup-input2'
            type="password"
            
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />
       </div>
       <div>
        <label className='signup-label3'>Confirm:</label>
        <input className='signup-input3'
        type="password"
        placeholder="Confirm Password"
        value={credentials.confirmPassword}
        onChange={(e) =>
          setCredentials({ ...credentials, confirmPassword: e.target.value })
        }
        required
        />
       </div>
      <div classname='btns-container'>
        <Btn onSubmit={handleSignup}>Signup</Btn>

      </div>
      
    </form>

    </div>
  );
};

export default Signup;

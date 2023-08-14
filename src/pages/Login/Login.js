import './Login.css'
// import { useState } from "react";
import Btn from '../../UIKit/Elements/Btn/Btn';
import React, { useState } from 'react';
// import axios from 'axios';
import { useAuth } from '../../components/useAuth';



const Login = ({setIsUser}) => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  function userValidation() {
    setIsUser(true)
    localStorage.setItem('isUser', true);
  }

  const handleLogin = async () => {
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
        
        login(userData);
      } else {
        
      }
    } catch (error) {
      
    }
  };

  return (
    <div classname="login">
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleLogin}>
      
        <div>
          <label className='login-label1'>Email:</label>
          <input className='login-input1'
            type="email"
            
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
            
          />
        </div>
       <div>
          <label className='login-label2'>Password:</label>
          <input className='login-input2'
            type="password"
            
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />
       </div>
      <div classname='btns-container'>
        <Btn onSubmit={userValidation} type="submit">Login</Btn>

      </div>
      
    </form>

    </div>
  );
};

export default Login;

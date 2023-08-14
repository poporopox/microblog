import './App.css';
import NavBar from './components/NavBar/Navbar';
import TweetsContainer from './pages/Home/Home';
import { Route, Routes, useNavigate, redirect } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import { useState, useEffect } from 'react';
import localforage from "localforage";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { useAuth } from './components/useAuth';

import Dashboard from './pages/Dashboard';




function App() {

  const [userName, setUserName] = useState('');
  const [updatedUserName, setUpdatedUserName] = useState(userName);
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false)
  

  const handleSave = (e) => {
    e.preventDefault()
    setUpdatedUserName(userName);
    navigate('./')
  }

  // const handleSave = (e) => {
  //   e.preventDefault()
  //   setUpdatedUserName(userName);
  // }

  useEffect(() => {
    localforage.getItem("tweeter").then(val => {
      setUserName(val)
    });
  }, [])

  useEffect(() => {
    localforage.setItem("tweeter", userName).then(() => {

    });
  }, [userName])

  return (
    <div className="App">
    
      
        
          {isUser ? <TweetsContainer /> : null}
          <Login />
          <Signup />
           
            <Routes>
              
              <Route path="/login" element={<Login isUser={isUser} setIsUser={setIsUser} />} />
              <Route path="/signup" element={<Signup isUser={isUser} setIsUser={setIsUser}  />} />
              
              <Route path='/profile' element={<Profile userName={userName} setUserName={setUserName} handleSave={handleSave} setUpdatedUserName={setUpdatedUserName} />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes> 
             
           
        
      
      
      
      
    

    </div>
  );
}

export default App;

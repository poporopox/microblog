import './App.css';
import NavBar from './components/NavBar/Navbar';
import TweetsContainer from './pages/Home/Home';
import { Route, Routes, useNavigate, redirect } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import { useState, useEffect } from 'react';
import localforage from "localforage";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


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
    
      
        
          
          <NavBar />
          <Login isUser={isUser} setIsUser={setIsUser}/>
          <Signup isUser={isUser} setIsUser={setIsUser} />
           
            <Routes>
              {isUser ? <Route path='/' element={<TweetsContainer userName={updatedUserName} />} /> : null }
              <Route path='/profile' element={<Profile userName={userName} setUserName={setUserName} handleSave={handleSave} setUpdatedUserName={setUpdatedUserName} />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes> 
             
           
        
      
      
      
      
    

    </div>
  );
}

export default App;

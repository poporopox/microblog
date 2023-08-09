import './App.css';
import NavBar from './components/NavBar/Navbar';
import TweetsContainer from './pages/Home/Home';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import { useState, useEffect } from 'react';
import localforage from "localforage";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {

  const [userName, setUserName] = useState('');
  const [updatedUserName, setUpdatedUserName] = useState(userName);
  const navigate = useNavigate();

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
    
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/' element={<TweetsContainer userName={updatedUserName} />} />
        <Route path='/profile' element={<Profile userName={userName} setUserName={setUserName} handleSave={handleSave} setUpdatedUserName={setUpdatedUserName} />} />
      </Routes>
      
      
      
    

    </div>
  );
}

export default App;

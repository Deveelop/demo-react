import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUser, setUser] = useState([]);
useEffect(() => {
const logInStatus = localStorage.getItem('isLoggedIn');
if(logInStatus === '1'){
  setIsLoggedIn(true);
}
}, []);

  const loginHandler = (Uemail, Upassword) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
   setUser(prevUser => {
    return [...prevUser, {email:Uemail, password:Upassword}];
   })
   localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin = {loginHandler} />}
        {isLoggedIn && <Home users={isUser}  />}
      </main>
    </React.Fragment>
  );
}

export default App;

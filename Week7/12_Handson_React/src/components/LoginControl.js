import React, { useState } from 'react';
import Guest from './Guest';
import User from './User';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const button = isLoggedIn ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <button onClick={handleLogin}>Login</button>
  );

  const view = isLoggedIn ? <User /> : <Guest />;

  return (
    <div>
      {button}
      {view}
    </div>
  );
}

export default LoginControl;

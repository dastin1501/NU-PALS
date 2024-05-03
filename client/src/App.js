// App.js
import React from 'react';
import LoginForm from './LoginForm';
import './App.css'; // Import CSS file
import Logo from './images/NUlogo.png'

function App() {
  return (
    <>
    <div className="app-container">
      <div className="left-section">
      <img src={Logo}/>
      </div>
      <div className="right-section">
        <LoginForm />
        <div className="navigation">
          <a href="/home.js">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
    </>
  );
}
// hello
export default App;

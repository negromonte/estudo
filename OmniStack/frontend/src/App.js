import React from 'react';

import './App.css';


import Routes from './routes';
// Se for usar logo no top do site!
//import logo from './assets/logo.svg';
//<img src={logo} alt="AirCnC" />

function App() {

  return (
    <div className="container">
      
      <div className="content">
        <Routes />
        
      </div>
    </div>
  );
}

export default App;

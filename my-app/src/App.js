import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import React from "react";
function App() {
  return (
    <Switch>
      <Route expact path="/login" component={LoginPage} />
      <Route expact path="/Home" component={HomePage} />
      <Route expact path="/register" component={RegisterPage} />
    </Switch>
  );
}

export default App;


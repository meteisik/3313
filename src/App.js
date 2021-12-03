import React, { Component } from 'react';
import Main from './components/Main'
import ReactDOM from 'react-dom';
import NavbarVer2 from './NavbarVer2';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import LoginPage from "..//src/components/LoginPage/LoginPage"
import Home from './Home';
class App extends Component {
  
  
  
  
  render() {
    return (
<div>

<BrowserRouter>
  
  <NavbarVer2/>

  <Main/>


    </BrowserRouter>


    </div>
    );
  }
}

export default App;

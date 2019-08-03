import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Nav from '../components/Nav/Nav'
import Home from '../components/Home/Home'
import { BrowserRouter as Router, Route , Link, Switch } from 'react-router-dom'

function App() {
  return (
   <Router>
     <Nav />
     <Switch>
       <Route path="/" component = {Home} />

     </Switch>
   </Router>
  );
}

export default App;

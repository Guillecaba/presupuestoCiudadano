import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Nav from '../components/Nav/Nav'
import Footer from'../components/Footer/Footer'
import Home from '../components/Home/Home'
import { BrowserRouter as Router, Route , Link, Switch } from 'react-router-dom'

function App() {
  return (
   <Router>
     <Nav />
     <Switch>
       <Route path="/" component = {Home} />

     </Switch>
     <Footer />
   </Router>
  );
}

export default App;

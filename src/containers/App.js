import React from "react";
import logo from "../logo.svg";
import "./App.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Educacion from "../components/Educacion/Educacion";
import DetalleMinisterio from "../components/Detalle/Detalle"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/educacion" component={Educacion} />
        <Route path="/detalle" component={DetalleMinisterio} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

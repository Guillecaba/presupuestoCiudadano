import React from "react";
import { ToastContainer } from "react-toastify";
import logo from "../logo.svg";
import "./App.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Educacion from "../components/Educacion/Educacion";
import DetalleMinisterio from "../components/Detalle/Detalle";
import Cambios from "../components/Cambios/Cambios";
import Ods from "../components/Ods/Ods";
import ScrollIntoView from "../components/ScrollIntoView/ScrollIntoView";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Financiacion from "../components/Financiacion/Financiacion";
import Ejecucion from "../components/Ejecucion/Ejecucion";
import Gasto from "../components/Gasto/Gasto";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
      <Router>
        <Nav />
        <ScrollIntoView>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/financiacion" component={Financiacion} />
            <Route path="/cambios" component={Cambios} />
            <Route path="/ods" component={Ods} />
            <Route path="/ejecucion" component={Ejecucion} />
            <Route path="/educacion" component={DetalleMinisterio} />
            <Route path="/obras" component={DetalleMinisterio} />
            <Route path="/urbanismo" component={DetalleMinisterio} />
            <Route path="/salud" component={DetalleMinisterio} />
            <Route path="/gasto" component={Gasto} />
          </Switch>
        </ScrollIntoView>
        <Footer />
      </Router>
   
  );
}

export default App;

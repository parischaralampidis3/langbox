import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./Layout/Navigation";

import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login"
import Alerts from "./Layout/Alerts/Alerts";

import About from "./Pages/About";
import Home from "./Pages/Home";

import './App.css';
import "./styles/tailwind.css";

import AuthState from "./Context/auth/AuthState";
import AlertState from "./Context/alert/AlertState";

const App = () => {
  return ( 
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navigation />
            <div className="container mx-auto">
              <div className="flex justify-center my-6">
                <Alerts />
                <Routes>
                  <Route exact path="/" element ={<Home/>}/>
                  <Route exact path="/register" element={<Register/>} />
                  <Route exact path="/login" element={<Login/>} />
                  <Route exact path="/about" element={<About/>} />
                </Routes>
               
              </div>
            </div>
          </Fragment>
        </Router>
        </AlertState>
      </AuthState>
  );
}

export default App;










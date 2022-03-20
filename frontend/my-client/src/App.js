import React, { Fragment,useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import{auth} from './Components/Auth/firebase/firebase.utils';
//import {useAuthState} from "react-firebase-hooks/auth";
import Navigation from "./Layout/Navigation";

import Home from "./Pages/Home"

import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login"
import Alerts from "./Layout/Alerts/Alerts";

import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";

import './App.css';
import "./styles/tailwind.css";

import AuthState from "./Context/auth/AuthState";
import AlertState from "./Context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";



    if(localStorage.token){
            setAuthToken(localStorage.token);
        }


  const App = () => {

// const [user] = useAuthState(auth);



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
                  <Route exact path = "/" element = {<Home/>}/>
                  <Route exact path="/dashboard" element ={<Dashboard/>}/>
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










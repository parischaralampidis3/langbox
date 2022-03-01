import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Layout/Navigation";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login"
import About from "./Pages/About"
import Home from "./Pages/Home"
import './App.css';
import "./styles/tailwind.css"

import AuthState from "./Context/auth/AuthState";
const App = () => {
  return ( 
    <AuthState>
        <Router>
          <Fragment>
            <Navigation />
            <div className="container mx-auto">
              <div className="flex justify-center my-6">
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
      </AuthState>
  );
}

export default App;










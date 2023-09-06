import React from "react";
import { Container, Navbar as NavbarBootstrap } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import "./home.css";
function Home() {
  return (
    <>
      <div className="home home-bg">
        <div className="home-bg-overlay">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 home-logo">
              <h1 className="h1">One Call Away</h1>
              <div className="row">
                <div className="col-md-6">Sending words....</div>
                <div className="col-md-6">
                  {" "}
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//Found out that if something is exported DEFAULT it  can be named something else. Usefully because bootstrap-react got a component named NavBar and I wanted to name out menu component NavBar as well Ex import NavbarMenuBlahBlah from './components/navbar/Navbar';
export default Home;

import React from "react";
import { Container, Navbar as NavbarBootstrap } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import "./about.css";
function About() {
  return <>about page</>;
}

//Found out that if something is exported DEFAULT it  can be named something else. Usefully because bootstrap-react got a component named NavBar and I wanted to name out menu component NavBar as well Ex import NavbarMenuBlahBlah from './components/navbar/Navbar';
export default About;

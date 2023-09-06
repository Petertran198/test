import React from "react";
import { Container, Navbar as NavbarBootstrap } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import "./navbar.css";
function Navbar() {
  return (
    <>
      <NavbarBootstrap bg="dark" variant="dark" className="my-2">
        <Container>
          <Link to="/" className="navbar-brand">
            Todo Application
          </Link>
          <NavbarBootstrap.Toggle />
          <NavbarBootstrap.Collapse className="justify-content-end">
            <NavbarBootstrap.Text>text here</NavbarBootstrap.Text>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </>
  );
}

//Found out that if something is exported DEFAULT it  can be named something else. Usefully because bootstrap-react got a component named NavBar and I wanted to name out menu component NavBar as well Ex import NavbarMenuBlahBlah from './components/navbar/Navbar';
export default Navbar;

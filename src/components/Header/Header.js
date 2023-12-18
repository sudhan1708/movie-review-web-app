import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expland="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideoSlash} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <NavLink className="nav-link me-2" to="/home">
              {" "}
              Home{" "}
            </NavLink>
            <NavLink className="nav-link me-2" to="/watchlist">
              {" "}
              Watchlist{" "}
            </NavLink>
          </Nav>
          <Button variant="outline-info"> Login </Button>
          <Button variant="outline-info"> Register </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

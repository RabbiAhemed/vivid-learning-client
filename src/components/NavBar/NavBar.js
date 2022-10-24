import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="menu fw-bold">
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Link to="/">
            <div className="logo-pair">
              <img
                src="https://i.ibb.co/dtBX1L6/downloader-transparent.png"
                alt="downloader-transparent"
                border="0"
                className="logo"
              />
              <h2 className="fs-3 fw-bolder">Vivid Learning</h2>
            </div>
          </Link>
          <div>
            <Link className="left-part" to="/courses">
              Courses
            </Link>
            <Link className="left-part" to="/faq">
              Faq
            </Link>
            <Link className="left-part" to="/blog">
              Blog
            </Link>
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="d-flex right-half">
              <Button variant="link">Dark mode</Button>
              <Button variant="link">Light mode</Button>
              <Button variant="link">Login</Button>
              <Button variant="link">Register</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

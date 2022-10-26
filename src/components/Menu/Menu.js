import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useContext, useState } from "react";
import "./Menu.css";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import { AuthContext } from "../../UserContext/UserContext";

const Menu = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const showName = ({ user }) => {
    const name = user.displayName;
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container className="text-danger">
        <Navbar.Brand to="/" className="logo-pair">
          <img
            src="https://i.ibb.co/dtBX1L6/downloader-transparent.png"
            alt="downloader-transparent"
            border="0"
            className="logo"
          />
          <h3 className="vivid">Vivid Learning</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="p-2" to="/courses">
              Courses
            </Link>
            <Link className="p-2" to="/blog">
              Blog
            </Link>
            <Link className="p-2" to="/faq">
              FAQ
            </Link>
          </Nav>

          <Nav>
            {user && user?.uid ? (
              <Link>
                <Button
                  onClick={logOutUser}
                  className="p-2 fw-bold text-white"
                  variant="info"
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="p-2 fw-bold text-white" variant="info">
                  Login
                </Button>
              </Link>
            )}
            <Link className="p-2" to="/register">
              Register
            </Link>
            <Link>
              <Button className="p-2 fw-bold text-white" variant="info">
                Light
              </Button>
            </Link>
            <Link>
              <Button className="p-2 fw-bold text-white" variant="info">
                Dark
              </Button>
            </Link>

            {user?.photoURL && (
              <Link
                onMouseEnter={() => showName(user)}
                className="left-part"
                to="/login"
              >
                <img
                  src={user.photoURL}
                  alt="removed-bg"
                  border="0"
                  title={user.displayName}
                  className="user-image rounded-circle border border-primary "
                />
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

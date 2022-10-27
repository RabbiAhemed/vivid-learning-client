import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useContext, useState, useEffect } from "react";
import "./Menu.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import { AuthContext } from "../../UserContext/UserContext";

const Menu = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light-theme");

  const handleToggleMode = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" id="myNav">
      <Container className="text-danger">
        <Link to="/" className="logo-pair">
          <img
            src="https://i.ibb.co/dtBX1L6/downloader-transparent.png"
            alt="downloader-transparent"
            border="0"
            className="logo"
          />
          <h3 className="vivid">Vivid Learning</h3>
        </Link>
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
              <Button
                onClick={logOutUser}
                className="mb-2 fw-bold text-white"
                variant="info"
              >
                Logout
              </Button>
            ) : (
              <Link className="p-2" to="/login">
                Login
              </Link>
            )}
            <Link className="p-2" to="/register">
              Register
            </Link>

            <Link>
              <Button
                className="p-2 fw-bold text-white"
                variant="info"
                onClick={handleToggleMode}
              >
                {theme}
              </Button>
            </Link>

            {(user?.photoURL || user?.email) && (
              <Link className="left-part" to="/login">
                <Tippy content={user?.displayName}>
                  <img
                    src={user.photoURL}
                    alt="removed-bg"
                    border="0"
                    className="user-image rounded-circle border border-primary "
                  />
                </Tippy>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

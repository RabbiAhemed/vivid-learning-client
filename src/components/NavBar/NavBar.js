import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
// import "./NavBar.css";
import { AuthContext } from "../../UserContext/UserContext";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(picture);

  const showName = ({ user }) => {
    const name = user.displayName;
  };

  return (
    <div className="menu fw-bold">
      <Navbar bg="" expand="lg">
        <Container fluid>
          <NavLink to="/">
            <div className="logo-pair">
              <img
                src="https://i.ibb.co/dtBX1L6/downloader-transparent.png"
                alt="downloader-transparent"
                border="0"
                className="logo"
              />
              <h2 className="vivid">Vivid Learning</h2>
            </div>
          </NavLink>
          <div>
            <NavLink className="left-part" to="/courses">
              Courses
            </NavLink>
            <NavLink className="left-part" to="/faq">
              Faq
            </NavLink>
            <NavLink className="left-part" to="/blog">
              Blog
            </NavLink>
            {user?.photoURL && (
              <NavLink
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
              </NavLink>
            )}
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
              {user && user?.uid ? (
                <Button onClick={logOutUser} variant="link">
                  Logout
                </Button>
              ) : (
                <NavLink to="/login">
                  <Button variant="link">Login</Button>
                </NavLink>
              )}
              <Link to="/register">
                <Button variant="link">Register</Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

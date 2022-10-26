import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const CoursesHome = () => {
  return (
    <div className="courses-home">
      <Container>
        <Row>
          <Col lg="3">
            <SideMenu></SideMenu>
          </Col>

          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesHome;

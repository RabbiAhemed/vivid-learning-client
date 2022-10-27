import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import "./Courses.css";
const Courses = () => {
  const courses = useLoaderData();

  return (
    <Container>
      <Row>
        <Col className="side-menu">
          {courses.map((course) => (
            <p className="side-links" key={course.id}>
              <Link to={`/course/${course.id}`}>{course.name}</Link>
            </p>
          ))}
        </Col>
        <Col>
          <div className="courses">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;

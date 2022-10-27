import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import "./Course.css";
const Course = ({ course }) => {
  const { id, name, price, image, rating, author } = course;
  const navigate = useNavigate();
  const navigateToCourseDetail = (id) => {
    navigate(`/course/${id}`);
  };
  return (
    <Card style={{ width: "18rem" }} className="course-card fw-bold">
      <Card.Img variant="top" src={image} className="p-1 course-image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>by {author}</Card.Text>
        <Card.Text>{rating.rate} ratings</Card.Text>
        <Card.Text>{rating.count} reviews</Card.Text>
        <h5>price: {price} $</h5>
        <button
          onClick={() => navigateToCourseDetail(id)}
          className="bg-info text-white fw-bold mx-1 my-2 py-2 px-3"
        >
          View
        </button>
      </Card.Body>
    </Card>
  );
};

export default Course;

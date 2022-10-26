import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Course.css";
const Course = ({ course }) => {
  const { name, price, image, rating, author } = course;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} className="p-1" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>by {author}</Card.Text>
        <Card.Text>{rating.rate} ratings</Card.Text>
        <Card.Text>{rating.count} views</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;

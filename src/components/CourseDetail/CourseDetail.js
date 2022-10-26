import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetail.css";
const CourseDetail = () => {
  const details = useLoaderData();
  const {
    id,
    name,
    price,
    description,
    image,
    rating,
    duration,
    author,
    outcome,
  } = details;

  return (
    <div className="details-container m-5 py-5">
      <div className="sl-one">
        <div className="main-info">
          <img src={image} alt="" className="course-image" />

          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            rated {rating.rate} star by {rating.count} students
          </p>
          <p>created by {author}</p>
          <h4>price: {price} $</h4>
        </div>
      </div>

      <div className="sl-two">
        <div>
          <h2>What you will learn</h2>
          {outcome.map((oc) => (
            <p>{oc}</p>
          ))}
        </div>
        <div>
          <Link to={`/checkout/${id}`}>
            <Button>Get premium access</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

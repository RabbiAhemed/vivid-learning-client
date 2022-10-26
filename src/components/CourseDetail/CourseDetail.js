import React from "react";
import { Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const details = useLoaderData();
  const { name, price, description, image, rating, duration, author, outcome } =
    details;
  console.log(typeof outcome);

  return (
    <div>
      <div>
        <div className="main-info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            rated {rating.rate} star by {rating.count} students
          </p>
          <p>created by {author}</p>
        </div>
        <div>
          <h2>What you will learn</h2>
          {outcome.map((oc) => (
            <p>{oc}</p>
          ))}
        </div>
      </div>

      <div>
        <img src={image} alt="" />
        <h4>${price}</h4>
        <Button>Get premium access</Button>
      </div>
    </div>
  );
};

export default CourseDetail;

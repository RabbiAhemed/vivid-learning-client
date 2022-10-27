import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./checkOut.css";
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CheckOut = () => {
  const courseId = useParams();
  const id = courseId.id;
  //   console.log(courseId.id);
  const [courseDetail, setCourseDetail] = useState({});
  useEffect(() => {
    const url = `https://server-side-vivid-learning-bing6n4j9-rabbiahemed.vercel.app/course/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCourseDetail(data));
  }, []);
  const { name, price, description, image, rating, duration, author, outcome } =
    courseDetail;
  return (
    <div className="w-75 mx-auto p-5 my-5 checkout-container">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button
            className="fw-bold text-white bg-warning p-2 rounded"
            onClick={toPdf}
          >
            Download Pdf<FaDownload></FaDownload>
          </button>
        )}
      </Pdf>
      <div className="header">
        <h4 className="fw-bold text-white p-3 my-2">
          Thank You for purchasing <span className="dynamic-name">{name}</span>
        </h4>
      </div>

      <div className="infos  p-3 text-white">
        <div className="info-left">
          <img src={image} alt="" className="course-img" />
          <div className="title-info">
            <h5 className="fw-bold">{name}</h5>
            <p className="italic-name font-white">{author}</p>
          </div>
        </div>
        <div className="info-right">
          <h4>${price}</h4>
        </div>
      </div>
      <div ref={ref}></div>
    </div>
  );
};

export default CheckOut;

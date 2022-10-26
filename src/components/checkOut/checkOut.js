import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return (
    <div>
      {/*  */}
      <label htmlFor="country" aria-required>
        Country
      </label>

      <select name="countries" id="countries" required>
        <option value="bangladesh">Bangladesh</option>
        <option value="usa">USA</option>
        <option value="england">England</option>
        <option value="australia">Australia</option>
      </select>

      {/*
       */}
      <form action="/action_page.php">
        <p>Payment Method</p>
          <input type="radio" id="cc" name="credit-card" value="credit" /> {" "}
        <label for="html">Credit/Debit Card</label>
        <br />
          <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
        <label for="css">CSS</label>
        <br /> {" "}
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
          <label for="javascript">JavaScript</label>
      </form>
    </div>
  );
};

export default CheckOut;

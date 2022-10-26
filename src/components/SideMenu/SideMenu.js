import React, { useEffect, useState } from "react";
import "./SideMenu.css";
const SideMenu = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch(
      "https://server-side-vivid-learning-bing6n4j9-rabbiahemed.vercel.app/allCourses"
    )
      .then((res) => res.json())
      .then((data) => setTitles(data));
  }, []);

  return (
    <div className="side-menu text-black">
      {titles.map((title) => (
        <p>{title.name}</p>
      ))}
    </div>
  );
};

export default SideMenu;

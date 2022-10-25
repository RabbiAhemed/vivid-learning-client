import React from "react";
import "./ThemeButton.css";
const ThemeButton = () => {
  return (
    <div className="themebtn">
      <input type="checkbox" id="toggle_checkbox" />

      <label htmlFor="toggle_checkbox">
        <div id="star">
          <div className="star" id="star-1">
            ★
          </div>
          <div className="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon"></div>
      </label>
    </div>
  );
};

export default ThemeButton;

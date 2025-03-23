import React from "react";
import "./Banner.css";

const Banner = ({
  background,
  text,
  backgroundImage,
  title,
  description,
  listItems = [],
  imageUrl,
}) => {
  return (
    <div
      className="banner"
      style={{
        backgroundColor: background || "#6a11cb",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div className="banner-content-wrapper">
        <div className="banner-content">
          <h1 className="banner-title">{title || "Personal Growth"}</h1>
          <p className="banner-text">
            {text || "I enjoy improving myself both in life and work."}
          </p>
          <p className="banner-description">
            {description ||
              "Alongside personal growth, I find fulfillment in various activities that enrich my perspective and well-being."}
          </p>
          {listItems.length > 0 && (
            <ul className="banner-list">
              {listItems.map((item, index) => (
                <li key={index} className="banner-list-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <button className="banner-button">What do you enjoy?</button>
        </div>
        <div className="image">
          <img
            src={
              imageUrl ||
              "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Banner illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

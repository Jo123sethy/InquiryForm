import React from "react";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div className="notfound-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-text">Page Not Found</h2>
      <p className="error-subtext">
        Oops! The page you're looking for doesn’t exist.
      </p>

      <a href="/" className="back-btn">Go Back Home</a>
    </div>
  );
};

export default Notfound;
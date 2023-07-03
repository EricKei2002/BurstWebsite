import React from "react";
import "./Vlog.css";

const Vlog = () => {
  return (
    <div className="vlog-container">
      <h2 className="vlog-title">日々の日常をVlogにしました</h2>
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1Jzi065jvDs"
          title="YouTube Video 1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zw9oANUsiqw"
          title="YouTube Video 2"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Vlog;

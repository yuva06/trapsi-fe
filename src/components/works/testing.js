import React from "react";

const Testing = () => {
  return (
    <div>
      <div className="wrapper-m">
        <div className="images-m">
          <div className="img-1-m"></div>
          <div id="img-2-m"></div>
        </div>
        <div className="slider-m">
          <div id="drag-line-m">
            <span></span>
          </div>
          <input type="range" id="main-slider" min="0" max="100" value="50" />
        </div>
      </div>
    </div>
  );
};

export default Testing;

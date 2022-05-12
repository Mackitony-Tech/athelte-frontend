import React from "react";
import "./Slide_show.scss";

import SimpleImageSlider from "react-simple-image-slider";

const images = [{ url: "./image2.jpeg" }, { url: "images/2.jpg" }, { url: "images/3.jpg" }];
export default function Slide_show() {
  return (
    <div className="slide-container">
      <SimpleImageSlider width={1000} height={504} images={images} showBullets={true} showNavs={true} />
    </div>
  );
}

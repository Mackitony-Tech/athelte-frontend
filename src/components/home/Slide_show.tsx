import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slide_show.scss";

const slideImages = [
  { url: "./login.jpg", caption: "slide 1" },
  { url: "https://unsplash.com/photos/atSaEOeE8Nk", caption: "slide 2" },
  { url: "https://unsplash.com/photos/_A7WLos9RfU", caption: "slide 3" },
  { url: "https://unsplash.com/photos/atSaEOeE8Nk", caption: "slide 4" },
];
export default function Slide_show() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

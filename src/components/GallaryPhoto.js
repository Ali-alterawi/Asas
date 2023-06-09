import React from "react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
import g1 from "../images/gallary/g1.jpg"
import g2 from "../images/gallary/g2.jpg"
import g3 from "../images/gallary/g3.jpg"
import g4 from "../images/gallary/g4.jpg"
import g5 from "../images/gallary/g5.jpg"
import g6 from "../images/gallary/g6.jpg"
import g7 from "../images/gallary/g7.jpg"
import g8 from "../images/gallary/g8.jpg"

const GallaryPhoto = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="font-bold text-lg text-center text-capitalize">our gallary</h1>
        <p className="mb-4 text-md text-center">
          Click on an image below to open the photo.
        </p>
        <SlideshowLightbox className="d-flex flex-row flex-wrap justify-content-center ">
          <img
            width="300"
            height="300"
            className="w-full rounded me-3 mb-3"
            src={g1}
            alt="Field with a blue sky"
          />
          <img
            width="300"
            height="300"
            className="w-full rounded me-3 mb-3"
            src={g2}
            alt="Pink flowers"
          />
          <img
            width="300"
            height="300"
            className="w-full rounded me-3 mb-3"
            src={g3}
            alt="Group of daisies"
          />
          <img
            width="300"
            height="300"
            className="w-full rounded me-3 mb-3"
            src={g4}
            alt="Group of daisies"
          />
          <img
            width="300"
            height="300"
            className="w-full rounded me-3 mb-3"
            src={g5}
            alt="Group of daisies"
          />
          <img
            width="300"
            height="300"
            className="w-full rounded me-3 mb-3"
            src={g6}
            alt="Group of daisies"
          />
          <img
            width="300"
            height="300"
            className="w-full rounded me-3 mb-3"
            src={g7}
            alt="Group of daisies"
          />
          <img
            width="300"
            height="300"
            className="w-full rounded me-3 mb-3"
            src={g8}
            alt="Group of daisies"
          />
        </SlideshowLightbox>
      </div>
    </>
  );
};

export default GallaryPhoto;

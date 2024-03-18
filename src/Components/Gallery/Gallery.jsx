import React, { useRef } from "react";
import "./Gallery.css";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const Gallery = () => {
  const gallery = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const scrollRef = useRef();

  function scroll(direction) {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="galleryContainer">
      <div className="galleryText">
        <p>Instagram</p>
        <img src={images.spoon} alt="" />
        <h2>Photo Gallery</h2>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button>View More</button>
      </div>
      <div className="gallery_Images_Container">
        <div className="gallery_Images" ref={scrollRef}>
          {gallery.map((item, i) => (
            <div className="gallery_image" key={`gallery_image-${i + 1}`}>
              <img src={item} alt="gallery" />
            </div>
          ))}
        </div>
        <div className="btns">
          <div className="left_arrow" onClick={() => scroll("left")}>
            <BsArrowLeftShort />
          </div>
          <div className="right_arrow" onClick={() => scroll("right")}>
            <BsArrowRightShort />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

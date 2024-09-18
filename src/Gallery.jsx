import React, { useEffect } from "react";
import GalleryStyling from "./assets/styling/Gallery.module.css";

function Gallery() {
  useEffect(() => {
      document.title = "Image Gallery";
  }, []);
  return (
    <>
      <div className={`${GalleryStyling.heading}`}>Image-Gallery</div>
    </>
  );
}

export default Gallery;

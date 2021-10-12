import React from "react";
import gallery from "../PhotoGallery/gallery.png";
import "./Gallery.css";



function Gallery() {
  return (
    <div>
          <img className="gallery" src={gallery} />
    </div>
  );
}

export default Gallery;
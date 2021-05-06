import React, { useState } from "react";

export const Gallery = ({ images, title, toggle }) => {
  const [imageSelected, setImageSelected] = useState(images[0]);

  console.log(imageSelected);
  const handleImages = (img) => {
    setImageSelected(img);
  };
  return (
    <div className="gallery">
      <button onClick={toggle}>
        <i className="fa fa-times" aria-hidden="true"></i>{" "}
      </button>
      <h1 className="text-grey">{title}</h1>
      <div className="image-selected">
        <div>
          <img src={imageSelected} alt="selected" />
        </div>
      </div>
      <div className="images-list">
        {images.map((image, index) => (
          <div
            className="image-gallery shadow-card"
            onClick={() => handleImages(image)}
            key={index}
          >
            <img src={image} alt={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

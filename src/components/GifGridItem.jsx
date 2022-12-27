import React from "react";

export const GifGridItem = ({ id, title, images }) => {
  return (
    <div className="card">
      <p> {title}</p>
      <img src={images} alt={title} />
    </div>
  );
};

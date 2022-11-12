import React from "react";

const Gallery = (props) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-3 h-56 bg-lighten-1 rounded"></div>
      <div className="aspect-square bg-lighten-1 rounded"></div>
      <div className="aspect-square bg-lighten-1 rounded"></div>
      <div className="aspect-square bg-lighten-1 rounded"></div>
    </div>
  );
};

export default Gallery;

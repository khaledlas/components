import React from "react";
import ImageZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProfilePhoto = () => {
  return (
    <div className="zoozoom">
      <ImageZoom>
        <img src="/images/khaled_cartoon.png" alt="avatar"></img>
      </ImageZoom>
      <p>Vous pouvez zoomer la photo</p>
    </div>
  );
};

export default ProfilePhoto;

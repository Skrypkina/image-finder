import React, { useContext } from "react";
import GaleryItem from "../GaleryItem/GaleryItem";
import "./styles.css";
import { Context } from "../../Context";

const Galery = () => {
  const { images } = useContext(Context);

  const renderImages = images.map((image) => {
    return (
      <GaleryItem
        id={image.id}
        webformatURL={image.webformatURL}
        tags={image.tags}
        key={image.id}
      />
    );
  });
  return <ul className="ImageGallery">{renderImages}</ul>;
};
export default Galery;

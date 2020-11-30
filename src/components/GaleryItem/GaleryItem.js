import React, { useContext } from "react";
import { Context } from "../../Context";
import "./styles.css";

export const GaleryItem = ({ id, webformatURL, tags }) => {
  const { handleOpenModal } = useContext(Context);
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => handleOpenModal(id)}
      />
    </li>
  );
};

export default GaleryItem;

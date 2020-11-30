import React, { useContext, useRef, useEffect } from "react";
import { Context } from "../../Context";
import "./styles.css";

const Modal = ({ img, tags }) => {
  const { handleCloseModal } = useContext(Context);
  const backdropRef = useRef(null);
  const handleKeyPress = (event) => {
    if (event.code !== "Escape") return;
    handleCloseModal();
  };
  const handleBackdropClick = (event) => {
    if (backdropRef.current && event.target !== backdropRef.current) {
      return;
    }
    handleCloseModal();
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div className="Overlay" ref={backdropRef} onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={img} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;

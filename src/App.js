import React, { useContext, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Galery from "./components/Galery/Galery";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal/Modal";
import { Context } from "./Context";

function App() {
  const {
    images,
    handlePageChange,
    isLoading,
    imageId,
    isModalOpen,
  } = useContext(Context);
  const endListRef = useRef(null);

  const imageToFind = images.find((image) => image.id === imageId);

  const renderImages = images.length > 0 && <Galery />;

  const Button = () => (
    <button type="button" className="button" onClick={handlePageChange}>
      Load more
    </button>
  );
  const renderButton = images.length > 0 && <Button />;
  const scrollToBottom = () => {
    endListRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [images]);

  useEffect(() => {
    isModalOpen
      ? document.body.classList.add("no-sroll")
      : document.body.classList.remove("no-sroll");
  }, [isModalOpen]);
  const renderModal = isModalOpen && (
    <Modal img={imageToFind.largeImageURL} tags={imageToFind.tags} />
  );

  return (
    <div className="App">
      <Header />
      {renderImages}
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
          className="loader"
        />
      )}
      {renderModal}
      <div ref={endListRef}></div>
      {renderButton}
    </div>
  );
}

export default App;

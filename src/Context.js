import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageId, setImageId] = useState(null);

  const handleOpenModal = (id) => {
    setIsModalOpen(true);
    setImageId(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleQueryChange = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const BASE_URL =
      "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";
    axios
      .get(
        `${BASE_URL}${query}&page=${page}&per_page=12&key=12647850-3be04ccdb337b060210fd27c5`
      )
      .then((data) => {
        setImages((prev) => [...prev, ...data.data.hits]);
        setIsLoading(false);
      });
  }, [query, page]);

  const handlePageChange = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <Context.Provider
      value={{
        images,
        handleQueryChange,
        query,
        handlePageChange,
        isLoading,
        handleOpenModal,
        handleCloseModal,
        isModalOpen,
        imageId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };

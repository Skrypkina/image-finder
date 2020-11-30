import React, { useState, useContext } from "react";
import "./styles.css";
import { Context } from "../../Context";

const Header = () => {
  const [value, setValue] = useState("");
  const { handleQueryChange } = useContext(Context);
  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleQueryChange(value);
      setValue("");
    }
  };

  const handleSubmit = () => {
    handleQueryChange(value);
    setValue("");
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button
          className="SearchForm-button"
          type="button"
          onClick={handleSubmit}
        >
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          type="text"
          placeholder="Search images"
          className="SearchForm-input"
          autoComplete="off"
          autoFocus
          value={value}
          onChange={handleChange}
          onKeyDown={onKeyPress}
        />
      </form>
    </header>
  );
};

export default Header;

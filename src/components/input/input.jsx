import classes from "../input/input.module.css";
import { useState } from "react";

export default function Input({ onChange, onSearch, placeholder="Filter by name..." }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && onSearch) {
        onSearch(inputValue);
    }
  };

  return (
    <div className={classes.input__container}>
      <img
        src="./public/image/icons/search.svg"
        className={classes.icon}
        onClick={() => {
          if (onSearch) {
            onSearch(inputValue);
          }
        }}
      />
      <input
        type="text"
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </div>
  );
}

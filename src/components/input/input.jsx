import classes from "../input/input.module.css";
import { useState } from "react";
import { ReactComponent as Search } from "../../../public/image/icons/search.svg";

export default function Input({
  onChange,
  onSearch,
  type = "default",
  placeholder,
  ...rest
}) {
  
  const [inputValue, setInputValue] = useState("");

  const defaultPlaceholder = type === "search" ? "Введите текст..." : "Поиск";
  const currentPlaceholder = placeholder || defaultPlaceholder;

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
      {type === "search" && (
        <Search
          className={classes.icon}
          onClick={() => {
            if (onSearch) {
              onSearch(inputValue);
            }
          }}
        />
      )}
      <input
        type="text"
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={currentPlaceholder}
        {...rest}
      />
    </div>
  );
}

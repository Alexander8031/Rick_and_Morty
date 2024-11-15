import classes from "../input/input.module.css";
import { useState } from "react";
import { ReactComponent as Search } from "../../../public/image/icons/search.svg";
import Button from "../Button/button.jsx";

export default function Input({
  onChange,
  type = "default",
  placeholder,
  ...rest
}) {
  
  const [inputValue, setInputValue] = useState("");

  const currentPlaceholder =
    placeholder || (type === "search" ? "Введите текст..." : "Поиск");

  const handleInputChange = (event, actionType = "input") => {
    const value =
      event?.target?.value !== undefined ? event.target.value : inputValue;
    setInputValue(value);
    if (onChange) {
      onChange(value, { type: actionType, event });
    }
  };

  return (
    <div className={classes.input__container}>
      {type === "search" && (
        <Button type="secondary">
          <Search className={classes.icon} onClick={handleInputChange} />
        </Button>
      )}
      <input
        type="text"
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={currentPlaceholder}
        {...rest}
        onKeyDown={() => {
          onChange(inputValue, { type: "search" });
        }}
      />
    </div>
  );
}

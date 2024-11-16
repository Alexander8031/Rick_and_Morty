import classes from "../input/input.module.css";
import { useState } from "react";
import { ReactComponent as Search } from "../../../public/image/icons/search.svg";

export default function Input({
  onChange,
  type = "default",
  placeholder,
  ...rest
}) {
  const [inputValue, setInputValue] = useState("");

  const defaultPlaceholder =
    placeholder || (type === "search" ? "Введите текст..." : "Поиск");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange?.(value);
  };

  return (
    <div className={classes.input__container}>
      {type === "search" && <Search className={classes.icon} />}
      <input
        type="text"
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={defaultPlaceholder}
        {...rest}
      />
    </div>
  );
}

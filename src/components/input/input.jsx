import classes from "../input/input.module.css";
import { useEffect, useState } from "react";
import { ReactComponent as Search } from "../../../public/image/icons/search.svg";

export default function Input({
  onChange,
  type = "default",
  placeholder,
  value,
  ...rest
}) {
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "")
  }, [value])

  const defaultPlaceholder =
    placeholder || (type === "search" ? "Введите текст..." : "Поиск");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
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
import classes from "../Select/select.module.css";
import { useState } from "react";

export default function Select({ name, selectOptions }) {
  const [open, setOpen] = useState(false);

  const handleMouseDown = () => {
    setOpen((previousState) => !previousState);
  };

  const handleBlur = () => {
    setOpen(false);
  };

  return (
    <div className={`${classes.wrapper} ${open ? classes.open : ""}`}>
      <select
        name={name}
        className={classes.select}
        onMouseDown={handleMouseDown}
        onBlur={handleBlur}
        defaultValue=""
      >
        <option value="" disabled hidden>{name}</option>
        {selectOptions &&
          selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
      <img src="./public/image/icons/mini-arrow.svg" alt="▾" className={classes.arrow} />
    </div>
  );
}

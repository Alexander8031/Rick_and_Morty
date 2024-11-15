import classes from "../Select/select.module.css";
import { useState, useRef } from "react";
import { ReactComponent as MiniArrow } from "../../../public/image/icons/miniArrow.svg";
import Button from "../Button/button.jsx";

export default function Select({ id, name, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  const handleOnClick = (el) => {
    el.preventDefault();
    if (selectRef.current) {
      selectRef.current.focus();
    } else {
      selectRef.current.blur();
    }
    setOpen(!open);
  };

  const handleBlur = () => {
    setOpen(false);
  };

  return (
    <div className={`${classes.wrapper} ${open ? classes.open : ""}`}>
      <div className={classes.selectContainer}>
        <select
          id={id}
          name={name}
          className={classes.select}
          ref={selectRef}
          onClick={handleOnClick}
          onBlur={handleBlur}
          defaultValue=""
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </select>
        <Button
          type="secondary"
          onMouseDown={handleOnClick}
          className={classes.buttonArrow}
        >
          <MiniArrow alt="▾" className={classes.arrow} />
        </Button>
      </div>
    </div>
  );
}

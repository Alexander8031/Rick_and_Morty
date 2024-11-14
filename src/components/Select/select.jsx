import classes from "../Select/select.module.css";
import { useState } from "react";
import { ReactComponent as MiniArrow } from "../../../public/image/icons/miniArrow.svg";

export default function Select({ id, name, options }) {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen((previousState) => !previousState);
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
          onClick={handleOnClick}
          onBlur={handleBlur}
          defaultValue=""
        >
          <option value="" disabled hidden>
            {name}
          </option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </select>
        <MiniArrow alt="▾" className={classes.arrow} />
      </div>
    </div>
  );
}

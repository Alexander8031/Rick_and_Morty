import classes from "../Select/select.module.css";
import { useState, useRef } from "react";
import { ReactComponent as MiniArrow } from "../../../public/image/icons/miniArrow.svg";
import Button from "../Button/button.jsx";

export default function Select({ id, name, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const [hoveredOption, setHoveredOption] = useState(null)
  const selectRef = useRef(null);

  const handleOnClick = () => {
    setOpen((previous) => !previous);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setOpen(false);
    setHoveredOption(null)
  };

  const handleMouseEnter = (option) => {
    setHoveredOption(option)
  }

  const handleMouseLeave = () => {
    setHoveredOption(null)
  }

  const handleBlur = (e) => {
    if (!selectRef.current.contains(e.relatedTarget)) {
      setOpen(false);
      setHoveredOption(null)
    }
  };

  return (
    <div
      id={id}
      className={`${classes.wrapper} ${open ? classes.open : ""}`}
      ref={selectRef}
      tabIndex={0}
      onBlur={handleBlur}
    >
      <div className={classes.selectContainer} onClick={handleOnClick}>
        <div className={classes.selectTextContainer}>
          <div className={classes.select} name={name}>
            {hoveredOption || selectedOption}
          </div>
        </div>
        <Button type="secondary" className={classes.buttonArrow}>
          <MiniArrow
            alt="▾"
            className={`${classes.arrow} ${open ? classes.arrowOpen : ""}`}
          />
        </Button>
      </div>
      {open && (
        <ul className={classes.options}>
          {options.map((option, index) => (
            <li
              key={index}
              className={classes.option}
              onClick={() => handleOptionSelect(option)}
              onMouseEnter={() => handleMouseEnter(option)}
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

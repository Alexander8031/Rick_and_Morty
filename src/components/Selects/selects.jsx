import classes from "./selects.module.css";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ReactComponent as MiniArrow } from "../../../public/image/icons/miniArrow.svg";

export default function Selects({ value, placeholder, name, options, onChange }) {
  return (
    <Listbox
      as="div"
      value={value}
      name={name}
      className={classes.wrapper}
      onChange={onChange}
    >
        <>
          <ListboxButton className={classes.select}>
            <span className={classes.selectText}>{value || placeholder}</span>
            <MiniArrow alt="▾" className={classes.arrow} />
          </ListboxButton>
          <ListboxOptions className={classes.options}>
            {options.map((option, index) => (
              <ListboxOption
                key={index}
                value={option}
                className={classes.option}
              >
                <span>{option}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </>
    </Listbox>
  );
}

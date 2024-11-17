import classes from "../Select/select.module.css";
import { useState } from "react";
import { ReactComponent as MiniArrow } from "../../../public/image/icons/miniArrow.svg";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

export default function Select({ placeholder, options }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions =
    (query || "").trim() === ""
      ? options
      : options.filter((option) =>
          option.toString().toLowerCase().includes(String(query).toLowerCase())
        );

  return (
    <Combobox
      value={selectedOption}
      onChange={setSelectedOption}
      onClose={() => {
        setQuery(false);
        setIsOpen(false);
      }}
    >
      <div className={classes.flexContainer} onClick={() => setIsOpen(true)}>
        <ComboboxInput
          displayValue={(option) =>
            option !== null && option !== undefined ? option : ""
          }
          placeholder={placeholder}
          className={classes.wrapper}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton>
          <MiniArrow alt="▾" className={classes.arrow} />
        </ComboboxButton>
      </div>
      <ComboboxOptions as="ul" className={classes.options}>
        {filteredOptions.map((option, index) => (
          <ComboboxOption
            as="li"
            key={index}
            value={option}
            className={classes.option}
          >
            {option}
          </ComboboxOption>
        ))}
        {filteredOptions.length === 0 && (
          <li className={classes.option}>Ничего не найдено</li>
        )}
      </ComboboxOptions>
    </Combobox>
  );
}

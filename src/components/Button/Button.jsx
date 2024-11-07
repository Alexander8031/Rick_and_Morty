import classes from "./Button.module.css";

export default function Button({ type = "primary" }) {
  const buttonClass =
    type === "secondary" ? classes.buttonSecondary : classes.buttonPrimary;

  return <button className={buttonClass}>LOAD MORE</button>;
}

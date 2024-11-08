import classes from "./Button.module.css";

export default function Button({ type = "primary", children, ...rest }) {
  const buttonClass =
    type === "secondary" ? classes.buttonSecondary : classes.buttonPrimary;

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}

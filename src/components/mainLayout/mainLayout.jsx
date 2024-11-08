import classes from "./mainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <main>
      <div className={classes.container}>{children}</div>
    </main>
  );
}

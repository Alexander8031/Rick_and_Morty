import { Outlet } from "react-router-dom";

import classes from "./layout.module.css";

export default function Layout() {
  return (
    <main>
      <div className={classes.container}>
        <Outlet />
      </div>
    </main>
  );
}

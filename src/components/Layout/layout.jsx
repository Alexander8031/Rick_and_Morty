import { Link, Outlet } from "react-router-dom";
import Header from "../Header/header.jsx";
import classes from "./layout.module.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className={classes.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

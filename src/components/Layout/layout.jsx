import { Outlet } from "react-router-dom";
import Header from "../Header/header.jsx";
import classes from "./layout.module.css";


export default function Layout() {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <Outlet />
      </main>
    </>
  );
}

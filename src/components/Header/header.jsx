import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import classes from "../Header/header.module.css";
// import { ReactComponent as Logo } from "../../public/icons/logo.svg";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  //   const Icon =

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <img
          src="../../common/icons/log.png"
          className={classes.logo}
          alt="img"
        />
        {/* <div>
          <Button type="secondary" className={classes.logo}>
            { <Logo /> }
            <p>Lorem ipsum dolor sit amet.</p>
          </Button>
        </div> */}
        <div className={classes.items}>
          <Button type="secondary" onClick={() => navigate("/characters")}>
            Characters
          </Button>
          <Button type="secondary">Locations</Button>
          <Button type="secondary">Episodes</Button>
        </div>
        <Button type="secondary">{/* <Icon /> */}</Button>
      </nav>
    </header>
  );
}

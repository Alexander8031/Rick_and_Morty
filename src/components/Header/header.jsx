import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../public/icons/logo.svg";
import classes from "../Header/header.module.css";
import Button from "../Button/Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Logo className={classes.logo} />
        <div className={classes.items}>
          <Button type="secondary" onClick={() => navigate("/characters")}>
            Characters
          </Button>
          <Button type="secondary" onClick={() => navigate("/locations")}>
            Locations
          </Button>
          <Button type="secondary" onClick={() => navigate("/episodes")}>
            Episodes
          </Button>
        </div>
      </nav>
    </header>
  );
}

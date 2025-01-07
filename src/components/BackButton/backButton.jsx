import classes from "./backButton.module.css";
import { ReactComponent as ArrowBack } from "../../../public/icons/arrowBack.svg";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={classes.container} onClick={handleGoBack}>
      <ArrowBack className={classes.arrow} />
      <h5 className={classes.text}>go back</h5>
    </div>
  );
}

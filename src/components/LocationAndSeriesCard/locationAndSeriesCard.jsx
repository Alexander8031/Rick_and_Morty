import Button from "../Button/Button";
import classes from "./locationAndSeriesCard.module.css";
import { useNavigate } from "react-router-dom";

export default function LocationAndSeriesCard({
  name,
  subname,
  description,
  type = "location",
}) {
  const navigate = useNavigate();

  const CardClass =
    type === "location" ? classes.cardLocation : classes.cardSeries;
  const SubnameClass =
    type === "location" ? classes.subnameLocation : classes.subnameSeries;

  return (
    <Button
      className={CardClass}
      onClick={() =>
        navigate(type === "location" ? `/location/${id}` : `/episodes/${id}`)
      }
    >
      <h3 className={classes.name}>{name}</h3>
      <p className={SubnameClass}>{subname}</p>
      {type === "series" && (
        <p className={classes.description}>{description}</p>
      )}
    </Button>
  );
}

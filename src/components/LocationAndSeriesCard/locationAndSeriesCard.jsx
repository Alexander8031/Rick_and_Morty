import Button from "../Button/Button";
import classes from "./locationAndSeriesCard.module.css";
import { useNavigate } from "react-router-dom";

export default function LocationAndSeriesCard({
  id,
  name,
  subname,
  description,
  type = "location",
}) {
  const navigate = useNavigate();
  
  return (
    <Button
      className={classes.card}
      onClick={() =>
        navigate(type === "location" ? `/location/${id}` : `/episodes/${id}`)
      }
    >
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.subname}>{subname}</p>
      {type === "series" && (
        <p className={classes.description}>{description}</p>
      )}
    </Button>
  );
}

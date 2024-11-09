import classes from "../characterCard/characterCard.module.css";

export default function CharacterCard({ character }) {
  return (
    <a href="#" key={character.id} className={classes.card}>
      <img src={character.image} alt="image" className={classes.img} />
      <div className={classes.description}>
        <h3 className={classes.name}>{character.name}</h3>
        <p className={classes.species}>{character.species}</p>
      </div>
    </a>
  );
}

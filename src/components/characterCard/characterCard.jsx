import { useState, useEffect } from "react";
import axios from "axios";
import classes from "../characterCard/characterCard.module.css";

export default function CharacterCard() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const axiosCharacter = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        setCharacter(response.data.results);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    axiosCharacter();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={classes.cards}>
      {character.map((character) => (
        <a href="#" key={character.id} className={classes.card}>
          <img src={character.image} alt="image" className={classes.img}/>
          <div className={classes.description}>
            <h3 className={classes.name}>{character.name}</h3>
            <p className={classes.species}>{character.species}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

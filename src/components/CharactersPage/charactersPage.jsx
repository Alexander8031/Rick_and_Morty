import classes from "../CharactersPage/charactersPage.module.css";
import { ReactComponent as RickAndMorty } from "../../../public/icons/RickAndMorty.svg";
import Input from "../input/input";
import CharacterCard from "../characterCard/characterCard";
import Button from "../Button/Button";

export default function CharactersPage() {
  const { data, isLoading, error } = useFetching("/character")  

  if (isLoading) {
    return <p>Загружаем персонажей...</p>
  }

  if (error) {
    return <p>Ошибка: {error}</p>
  }
 
  return (
    <>
      <div className={classes.containerImg}>
        <RickAndMorty className={classes.img} />
      </div>
      <div className={classes.containerInputSelects}>
        <Input type="search" />
        <Input type="search" />
        <Input type="search" />
        <Input type="search" />
      </div>
      <div className={classes.containerCharacters}>
        {data.restults.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className={classes.containerButton}>
        <Button type="primary">LOAD MORE</Button>
      </div>
    </>
  );
}

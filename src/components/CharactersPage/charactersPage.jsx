import classes from "../CharactersPage/charactersPage.module.css";
import { useState } from "react";
import { ReactComponent as RickAndMorty } from "../../../public/icons/RickAndMorty.svg";
import Input from "../input/input";
import CharacterCard from "../characterCard/characterCard";
import Button from "../Button/Button";
import useFetching from "../UseFetching/UseFetching";
import Selects from "../Selects/selects";

export default function CharactersPage() {
  const { data, isLoading, error } = useFetching("/character");
  const [ visibleCount, setVisibleCount ] = useState(8);

  if (isLoading) {
    return <p>Загружаем персонажей...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  const visibleCharacters = data?.results?.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div>
      <div className={classes.containerImg}>
        <RickAndMorty className={classes.img} />
      </div>
      <div className={classes.containerInputSelects}>
        <Input type="search" />
        {/* <Selects placeholder="Species"/> */}
        {/* <Selects placeholder="Gender"/> */}
        {/* <Selects placeholder="Status"/> */}
        <Input type="search" />
        <Input type="search" />
        <Input type="search" />
      </div>
      <div className={classes.containerCharacters}>
        {visibleCharacters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className={classes.containerButton}>
        {visibleCount < data?.results?.length && (
          <Button type="primary" onClick={handleLoadMore}>
            LOAD MORE
          </Button>
        )}
      </div>
    </div>
  );
}

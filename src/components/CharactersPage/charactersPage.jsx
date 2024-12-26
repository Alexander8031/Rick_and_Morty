import { ReactComponent as RickAndMorty } from "../../../public/icons/RickAndMorty.svg";
import classes from "../CharactersPage/charactersPage.module.css";
import Input from "../input/input";
import Selects from "../Selects/selects";
import CharacterCard from "../characterCard/characterCard";
import Button from "../Button/Button";
import useFetching from "../UseFetching/UseFetching";
import useStore from "../../store/store";
import { useMemo } from "react";

export default function CharactersPage() {
  const characters = useStore((state) => state.characters);
  const page = useStore((state) => state.page);
  const filters = useStore((state) => state.filters);
  const options = useStore((state) => state.options);
  const setPage = useStore((state) => state.setPage);
  const setFilters = useStore((state) => state.setFilters);

  const params = useMemo(
    () => ({
      page,
      name: filters.search,
      species: filters.species,
      gender: filters.gender,
      status: filters.status,
    }),
    [page, filters]
  );

  const { isLoading } = useFetching("/character", params);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ [key]: value });
  };

  return (
    <div>
      <div className={classes.containerImg}>
        <RickAndMorty className={classes.img} />
      </div>
      <div className={classes.containerInputSelects}>
        <Input
          type="search"
          placeholder="Search characters"
          value={filters.search}
          onChange={(value) => handleFilterChange("search", value)}
        />
        <Selects
          placeholder="Species"
          name="species"
          options={options.species}
          value={filters.species}
          onChange={(value) => handleFilterChange("species", value)}
        />
        <Selects
          placeholder="Gender"
          name="gender"
          options={options.gender}
          value={filters.gender}
          onChange={(value) => handleFilterChange("gender", value)}
        />
        <Selects
          placeholder="Status"
          name="status"
          options={options.status}
          value={filters.status}
          onChange={(value) => handleFilterChange("status", value)}
        />
      </div>
      <div className={classes.containerCharacters}>
        {isLoading ? (
          <p>Загружаем персонажей...</p>
        ) : characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>Нет персонажей для отображения</p>
        )}
      </div>
      {Array.isArray(characters) && characters.length > 16 && (
        <div className={classes.containerButton}>
          <Button type="primary" onClick={handleLoadMore}>
            LOAD MORE
          </Button>
        </div>
      )}
    </div>
  );
}

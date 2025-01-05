import classes from "../Episodes/episodes.module.css";
import { ReactComponent as RickAndMortyEpisodes } from "../../../public/icons/RickAndMortyEpisodes.svg";
import Input from "../input/input";
import useStore from "../../store/store.ts";
import Button from "../Button/Button";
import LocationAndSeriesCard from "../LocationAndSeriesCard/locationAndSeriesCard.jsx";
import useEpisodes from "./useEpisodes.js";

export default function Episodes() {
  const { isLoading } = useEpisodes();
  const episode = useStore((state) => state.episode);
  const page = useStore((state) => state.page);
  const filters = useStore((state) => state.filters);
  const setPage = useStore((state) => state.setPage);
  const setFilters = useStore((state) => state.setFilters);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ [key]: value });
  };

  return (
    <>
      <div className={classes.containerImg}>
        <RickAndMortyEpisodes className={classes.img} />
      </div>
      <div className={classes.containerInput}>
        <Input
          type="search"
          placeholder="Filter by name or episode (ex. S01 or S01E02)"
          value={filters.search}
          onChange={(value) => handleFilterChange("search", value)}
          style={{ width: "500px" }}
        />
      </div>
      <div className={classes.containerEpisodes}>
        {isLoading ? (
          <p>Загружаем эпизоды...</p>
        ) : episode.length > 0 ? (
          episode.map((episode) => (
            <LocationAndSeriesCard
              key={episode.id}
              name={episode.name}
              subname={episode.air_date}
              description={episode.episode}
              type="series"
            />
          ))
        ) : (
          <p>Нет эпизодов для отображения</p>
        )}
      </div>
      {Array.isArray(episode) && episode.length > 16 && (
        <div className={classes.containerButton}>
          <Button type="primary" onClick={handleLoadMore}>
            LOAD MORE
          </Button>
        </div>
      )}
    </>
  );
}

import classes from "../Locations/locations.module.css";
import { ReactComponent as RickAndMortyLocations } from "../../../public/icons/RickAndMortyLocations.svg";
import Input from "../input/input";
import useStore from "../../store/store.ts";
import { useMemo } from "react";
import useFetching from "../UseFetching/UseFetching";
import Selects from "../Selects/selects";
import Button from "../Button/Button";
import LocationAndSeriesCard from "../LocationAndSeriesCard/locationAndSeriesCard.jsx";

export default function Locations() {
  const location = useStore((state) => state.location);
  const page = useStore((state) => state.page);
  const filters = useStore((state) => state.filters);
  const options = useStore((state) => state.options);
  const setPage = useStore((state) => state.setPage);
  const setFilters = useStore((state) => state.setFilters);

  const params = useMemo(
    () => ({
      page,
      name: filters.search,
      type: filters.type,
      dimension: filters.dimension,
    }),
    [page, filters]
  );

  const { isLoading } = useFetching("/location", params);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ [key]: value });
  };

  return (
    <>
      <div className={classes.containerImg}>
        <RickAndMortyLocations className={classes.img} />
      </div>
      <div className={classes.containerInputSelects}>
        <Input
          type="search"
          placeholder="Search locations"
          value={filters.search}
          onChange={(value) => handleFilterChange("search", value)}
          style={{ width: "326px" }}
        />
        <Selects
          placeholder="Type"
          name="type"
          options={options.type}
          value={filters.type}
          onChange={(value) => handleFilterChange("type", value)}
        />
        <Selects
          placeholder="Dimension"
          name="dimension"
          options={options.dimension}
          value={filters.dimension}
          onChange={(value) => handleFilterChange("dimension", value)}
        />
      </div>
      <div className={classes.containerLocations}>
        {isLoading ? (
          <p>Загружаем локации...</p>
        ) : location.length > 0 ? (
          location.map((location) => (
            <LocationAndSeriesCard key={location.id} location={location} />
          ))
        ) : (
          <p>Нет локаций для отображения</p>
        )}
      </div>
      {Array.isArray(location) && location.length > 16 && (
        <div className={classes.containerButton}>
          <Button type="primary" onClick={handleLoadMore}>
            LOAD MORE
          </Button>
        </div>
      )}
    </>
  );
}

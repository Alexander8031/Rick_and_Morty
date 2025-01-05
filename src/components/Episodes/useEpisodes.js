import { useCallback, useMemo } from "react";
import useStore from "../../store/store";
import useFetching from "../UseFetching/UseFetching";

export default function useEpisodes() {
  const setEpisode = useStore((state) => state.setEpisode);
  const setFilterOptions = useStore((state) => state.setFilterOptions);
  const setFilters = useStore((state) => state.setFilters);
  const page = useStore((state) => state.page);
  const filters = useStore((state) => state.filters);

  const params = useMemo(
    () => ({
      page,
      name: filters.search,
      air_date: filters.air_date,
      episode: filters.gender,
    }),
    [page, filters]
  );

    const handleSuccess = useCallback(
      (data) => {
    if (Array.isArray(data.results)) {
      setEpisode(data.results, params.page > 1);

      if (params.page === 1) {
        const air_dateSet = new Set();
        const episodeSet = new Set();

        data.results.forEach((character) => {
          air_dateSet.add(character.air_date);
          episodeSet.add(character.episode);
        });

        setFilterOptions({
          air_date: Array.from(air_dateSet),
          episode: Array.from(episodeSet),
        });
      }
    } else {
      setEpisode([], false);
    }
  }, [setEpisode, setFilterOptions, setFilters, params.page]);

  const { isLoading, error } = useFetching("/episode", params, handleSuccess)
  
  return { isLoading, error };
}

import { useCallback, useMemo } from "react";
import useStore from "../../store/store";
import useFetching from "../UseFetching/UseFetching";

export default function useCharacters() {
  const setCharacters = useStore((state) => state.setCharacters);
  const setFilterOptions = useStore((state) => state.setFilterOptions);
  const page = useStore((state) => state.page);
  const filters = useStore((state) => state.filters);

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

    const handleSuccess = useCallback(
      (data) => {
    if (Array.isArray(data.results)) {
      setCharacters(data.results, params.page > 1);

      if (params.page === 1) {
        const speciesSet = new Set();
        const genderSet = new Set();
        const statusSet = new Set();

        data.results.forEach((character) => {
          speciesSet.add(character.species);
          genderSet.add(character.gender);
          statusSet.add(character.status);
        });

        setFilterOptions({
          species: Array.from(speciesSet),
          gender: Array.from(genderSet),
          status: Array.from(statusSet),
        });
      }
    } else {
      setCharacters([], false);
    }
  }, [setCharacters, setFilterOptions, params.page]);

  const { isLoading, error } = useFetching("/character", params, handleSuccess)
  
  return { isLoading, error };
}

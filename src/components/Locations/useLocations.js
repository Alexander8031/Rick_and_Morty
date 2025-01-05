import { useCallback, useMemo } from "react";
import useStore from "../../store/store";
import useFetching from "../UseFetching/UseFetching";

export default function useLocations() {
  const setLocation = useStore((state) => state.setLocation);
  const setFilterOptions = useStore((state) => state.setFilterOptions);
  const setFilters = useStore((state) => state.setFilters)
  const page = useStore((state) => state.page);
  const filters = useStore((state) => state.filters);

  const params = useMemo(
    () => ({
      page,
      name: filters.search,
      type: filters.type,
      dimension: filters.dimension,
    }),
    [page, filters]
  );

    const handleSuccess = useCallback(
      (data) => {
    if (Array.isArray(data.results)) {
      setLocation(data.results, params.page > 1);

      if (params.page === 1) {
        const typeSet = new Set();
        const dimensionSet = new Set();

        data.results.forEach((location) => {
          typeSet.add(location.type);
          dimensionSet.add(location.dimension);
        });

        setFilterOptions({
          type: Array.from(typeSet),
          dimension: Array.from(dimensionSet),
        });
      }
    } else {
      setLocation([], false);
    }
  }, [setLocation, setFilterOptions, setFilters, params.page]);

  const { isLoading, error } = useFetching("/location", params, handleSuccess)
  
  return { isLoading, error };
}

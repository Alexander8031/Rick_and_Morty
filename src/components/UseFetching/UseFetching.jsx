import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../../store/store";

export default function useFetching(url, params) {
  const setLocation = useStore((state) => state.setLocation)
  const setCharacters = useStore((state) => state.setCharacters);
  const setFilterOptions = useStore((state) => state.setFilterOptions);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api${url}`,
          {
            params,
          }
        );

        // if (url === "/character") {
        if (Array.isArray(response.data.results)) {
          setCharacters(response.data.results, params.page > 1);
          // setLocation(response.data.results, params.page > 1)
        }

        if (response.data.results.length === 0) {
          setCharacters([], false)
          // setLocation([], false)
        }

        if (params.page === 1 && Array.isArray(response.data.results)) {
          const speciesSet = new Set();
          const genderSet = new Set();
          const statusSet = new Set();
          // const typeSet = new Set();
          // const dimensionSet = new Set();

          response.data.results.forEach((character) => {
            speciesSet.add(character.species);
            genderSet.add(character.gender);
            statusSet.add(character.status);
          });

          // response.data.result.forEach((location) => {
          //   typeSet.add(location.type)
          //   dimensionSet.add(location.dimension)
          // })

          setFilterOptions({
            species: Array.from(speciesSet),
            gender: Array.from(genderSet),
            status: Array.from(statusSet),
            // type: Array.from(typeSet),
            // dimension: Array.from(dimensionSet)
          });
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Ошибка при загрузке данных');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, params, setCharacters, setFilterOptions, setLocation ]);

  return { isLoading, error };
}

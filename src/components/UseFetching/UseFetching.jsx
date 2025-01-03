import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../../store/store";

export default function useFetching(url, params) {
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

        if (Array.isArray(response.data.results)) {
          setCharacters(response.data.results, params.page > 1);
        }

        if (response.data.results.length === 0) {
          setCharacters([], false)
        }

        if (params.page === 1 && Array.isArray(response.data.results)) {
          const speciesSet = new Set();
          const genderSet = new Set();
          const statusSet = new Set();

          response.data.results.forEach((character) => {
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
      } catch (err) {
        setError(err.response?.data?.message || 'Ошибка при загрузке данных');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, params, setCharacters, setFilterOptions]);

  return { isLoading, error };
}

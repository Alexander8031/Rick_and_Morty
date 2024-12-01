import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../../store/store";

export default function useFetching(addEndUrl) {
  const setResults = useStore((state) => state.setResults);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = "https://rickandmortyapi.com/api"

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${baseUrl}${addEndUrl}`);
        setResults(response.data.results);
      } catch (err) {
        setError(err.response?.data?.message || "Что-то пошло не так...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [addEndUrl, setResults]);

  return { isLoading, error };
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetching(addEndUrl) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = "https://rickandmortyapi.com/api";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${baseUrl}${addEndUrl}`);
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Что-то пошло не так...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [addEndUrl]);

  return { data, isLoading, error };
}

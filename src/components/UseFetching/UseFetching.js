import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetching(url, params, onSucces) {
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

        onSucces(response.data)
      } catch (err) {
        setError(err.response?.data?.message || 'Ошибка при загрузке данных');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, params, onSucces ]);

  return { isLoading, error };
}

import { useEffect, useState } from "react";

export default function useFetching(fetchFunction) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(err.message || "Что-то пошло не так...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, isLoading };
}

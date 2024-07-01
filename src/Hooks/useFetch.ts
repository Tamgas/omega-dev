import { useEffect, useState } from "react";
import { Job } from "./types";  

interface FetchResult {
  isLoading: boolean;
  data: Job[];
  error: string | null;
}

const useFetch = (): FetchResult => {
  const API_URL = 'http://3.34.200.34/jobs';
  const [data, setData] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const responseData = await response.json();
      if (response.ok) {
        setData(responseData.data);
      } else {
        throw new Error(responseData.message || 'Failed to fetch data');
      }
    } catch (err) {
      setError((err as Error).message || 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
    error,
  };
}

export default useFetch;

import { AxiosRequestConfig } from "axios";
import { useCallback, useState } from "react";
import httpClient from "../lib/httpClient";

type FetchOptions = {
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
};

const useFetchData = <T,>(filePath: string, options?: FetchOptions) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const config: AxiosRequestConfig = {
        headers: options?.headers,
        params: options?.params,
      };
      const response = await httpClient.get<T>(filePath, config);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [filePath, options?.headers, options?.params]);

  return { data, loading, error, fetchData };
};

export default useFetchData;

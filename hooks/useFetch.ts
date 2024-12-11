import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const getData = async () => {
    setIsLoading(true);
    await waitFor(1000);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === "string") {
        setError(error);
      } else {
        setError("An unknown error occured");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;

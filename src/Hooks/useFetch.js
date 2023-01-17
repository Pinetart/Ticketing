import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortConn = new AbortController();

    fetch(url, { signal: abortConn.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error(
            `Status: ${response.status} - Could not fetch data from resource.`
          );
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => abortConn.abort();
  }, [url]);
  return { data, error, isLoading };
};

export default useFetch;

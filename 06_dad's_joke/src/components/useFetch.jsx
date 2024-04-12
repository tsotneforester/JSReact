import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await axios(url);
      console.log(response);
      setData(response.data.joke);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return { data, setData, loading, setLoading, error, refetch: fetchData };
}

export default useFetch;

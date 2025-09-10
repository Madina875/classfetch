import { useEffect, useState } from "react";
import { api } from "../api";

export const useFetch = (endpoint) => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    api.get(endpoint).then((res) => setData(res.data));
  }, []);

  return { data };
};

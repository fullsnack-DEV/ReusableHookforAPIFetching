import { useEffect } from "react";
import endpoints from "./Endpoints";
import "./styles.css";
import useApi from "./useApi";

export default function App() {
  const { data: movies, error, loading, request: loadmovies } = useApi(
    endpoints.getonair
  );

  useEffect(() => {
    loadmovies();
  }, []);

  console.log(movies);
  console.log(error);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

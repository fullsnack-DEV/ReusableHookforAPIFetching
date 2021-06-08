import { useEffect } from "react";
import useApi from "./useApi";
import endpoints from "./Endpoints";
const Moviecomp = ({ endpoint, title, top }) => {
  //Reusable Hook
  const { data: movies, error, loading, request: loadmovies } = useApi(
    endpoint
  );

  useEffect(() => {
    loadmovies();
    console.log("Renderd");
  }, []);
  //getting poster path
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="row-movies">
          {movies.splice(0, 10).map((movie, i) => (
            <div className="imgcontainer">
              <img
                key={movie.id}
                style={{
                  width: "200px",
                  marginLeft: "100px",
                  borderRadius: "10%"
                }}
                src={getposter(movie.poster_path)}
                alt={movie.name}
              />
              {top ? <h1 className="nums">{i + 1}</h1> : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Moviecomp;

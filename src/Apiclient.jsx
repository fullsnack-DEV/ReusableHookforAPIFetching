//import Clinet fro  ApiSauce
import { create } from "apisauce";

//WE are fetching the data from the IMDB API

const myapi = (extension) =>
  create({
    baseURL: `https://api.themoviedb.org/3/${extension}`
  });

// const clinetapi = create({
//   baseURL: "https://api.themoviedb.org/3/movie"
// });

export default myapi;

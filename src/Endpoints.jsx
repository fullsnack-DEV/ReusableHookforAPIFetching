import myapi from "./Apiclient";
//getmovies
const getmovies = () =>
  myapi("movie").get(
    "/popular?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );
//getupcoming

const getupcoming = () =>
  myapi("tv").get(
    "/now_playing?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );
//getonair series
const getonair = () =>
  myapi("tv").get(
    "on_the_air?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );

export { getmovies, getupcoming, getonair };

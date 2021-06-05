import react, { useState } from "react";

const useApi = (apifunc) => {
  //state variables
  const [data, Setdata] = useState([]);

  //state variables for Errors
  const [error, Seterror] = useState(false);

  //State var for loaders
  const [loading, Setloading] = useState(false);

  //create a funstion that can fetxh the data
  const request = async () => {
    //set the loading to true

    Setloading(true);

    //Make a Call
    const response = await apifunc();
    //Set the Loader to false
    Setloading(false);
    if (!response.ok) return Seterror(true);

    //Set the data
    Setdata(response.data.results);
  };

  //Return all the params

  return { data, loading, error, request };
};

export default useApi;

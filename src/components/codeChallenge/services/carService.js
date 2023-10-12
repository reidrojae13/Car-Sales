import axios from "axios";

const carsService = {
    endpoint: "https://jsonplaceholder.typicode.com/posts",
  };
  const addCar = (payload) => {
    console.log("cars post is working", payload);
    const config = {
      method: "POST",
      url: carsService.endpoint,
      data: payload,
      crossdomain: true,
      header: { "Content-Type": "application/json" },
    };
    return axios(config);
  };
  export default addCar ;

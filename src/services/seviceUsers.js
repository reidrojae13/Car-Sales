import axios from "axios";


const serviceUsers = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};






serviceUsers.Register = (payload) => {
  console.log("friend is being added", payload);
  const config = {
    method: "POST",
    url: serviceUsers.endpoint + "/register",
    data: payload,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };
  return axios(config);
};



        serviceUsers.Login = (payload) => {
        console.log("Login is working", payload);
        const config = {
          method: "POST",
          url: serviceUsers.endpoint + "/login",
          data: payload,
          crossdomain: true,
          header: { "Content-Type": "application/json" },
        };
        return axios(config);
      };



      serviceUsers.currentUser = (payload) => {
        console.log("friend is being added", payload);
        const config = {
          method: "GET",
          url: serviceUsers.endpoint + "/current",
          crossdomain: true,
          header: { "Content-Type": "application/json" },
        };
        return axios(config);
      };
      


      serviceUsers.GetId = (id) =>{
        const config = {
            method: "GET",
            url: serviceUsers.endpoint + `/${id}` ,
            crossdomain: true,
            header: { "Content-Type": "application/json" },
        };
        return axios(config)
    
    }
    
      export default serviceUsers;



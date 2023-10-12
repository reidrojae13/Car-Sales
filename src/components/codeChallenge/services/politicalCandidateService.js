import axios from "axios";

const entityService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/",
  };
  const politicalCandidateService = (payload) => {
    console.log("entities call is working", payload);
    const config = {
      method: "POST",
      url: entityService.endpoint + "politicalCandidates",
      data: payload,
      crossdomain: true,
      header: { "Content-Type": "application/json" },
    };
    return axios(config);
  };
  export default politicalCandidateService ;

import axios from "axios";

const recipesService = {
    endPoint: "https://my-json-server.typicode.com/selvaicodes/recipes/recipes"
}

recipesService.getAll = () => {
    const config = {
        method: "GET",
        url: recipesService.endPoint,
        data: null,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
};
 

export default recipesService;
import axios from "axios";

const usersService = {
    endPoint: "https://jsonplaceholder.typicode.com/users"
}

usersService.getUsers = () => {
    const config = {
        method: "GET",
        url: usersService.endPoint,
        data: null,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
};


export default usersService
import axios from 'axios'
// ANYTTHING related to friendService should all be in thius file
// GET, POST, PUT, DELETE, SEARCH, PAGINATED

const friendsService = {
    endpoint : "https://api.remotebootcamp.dev/api/friends"
}

// i am going to create the api for adding a friend

friendsService.add = (payload) =>{
    const config = {
        method: "POST",
        url: friendsService.endpoint,
        data: payload,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
}

// UPDATE
friendsService.update = (payload, id) =>{
    const config = {
        method: "PUT",
        url: friendsService.endpoint + `/${id}` ,
        data: payload,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
}


// GET
friendsService.getPage = (pageIndex, pageSize) =>{
    const config = {
        method: "GET",
        url: friendsService.endpoint + `?pageIndex=${pageIndex}&pageSize=${pageSize}` ,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
}


friendsService.delete = (id) =>{
    const config = {
        method: "DELETE",
        url: friendsService.endpoint + `/${id}` ,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config).then(() =>{
        return id
    });
}

friendsService.search = (pageIndex, pageSize,searchQuery) =>{
    const config = {
        method: "GET",
        url: friendsService.endpoint + `/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${searchQuery}`,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
}

// since I am putting the functions all in one object

export default friendsService

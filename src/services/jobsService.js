import axios from "axios";


const jobsService = {
    endpoint: "https://api.remotebootcamp.dev/api/jobs"
}



jobsService.getJobs = (pageIndex, pageSize) =>{
    const config = {
        method: "GET",
        url: jobsService.endpoint + `?pageIndex=${pageIndex}&pageSize=${pageSize}` ,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
}



 jobsService.search=  (pageIndex, pageSize,searchQuery) =>{
        const config = {
            method: "GET",
            url: jobsService.endpoint + `/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${searchQuery}`,
            crossdomain: true,
            header: { "Content-Type": "application/json" },
        };
        return axios(config);
    }

    jobsService.add = (payload) =>{
        const config = {
            method: "POST",
            url: jobsService.endpoint,
            data: payload,
            crossdomain: true,
            header: { "Content-Type": "application/json" },
        };
        return axios(config);
    }
    
    // UPDATE
    jobsService.update = (payload, id) =>{
        const config = {
            method: "PUT",
            url: jobsService.endpoint + `/${id}` ,
            data: payload,
            crossdomain: true,
            header: { "Content-Type": "application/json" },
        };
        return axios(config);
    }
    
    
    // since I am putting the functions all in one object


    
    export default jobsService
import axios from "axios";

const companyService = {
    endpoint: "https://api.remotebootcamp.dev/api/techcompanies"
}



companyService.getCompany = (pageIndex, pageSize) =>{
    const config = {
        method: "GET",
        url: companyService.endpoint + `?pageIndex=${pageIndex}&pageSize=${pageSize}` ,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
}

companyService.search = (pageIndex, pageSize,searchQuery) =>{
    const config = {
        method: "GET",
        url: companyService.endpoint + `/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${searchQuery}`,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
}


companyService.add = (payload) =>{
    const config = {
        method: "POST",
        url: companyService.endpoint,
        data: payload,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
}


companyService.delete = (id, Deleted) =>{
    const config = {
        method: "PUT",
        url: companyService.endpoint + `/${id}/${Deleted}` ,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config)
}



companyService.update = (payload, id) =>{
    const config = {
        method: "PUT",
        url: companyService.endpoint + `/${id}` ,
        data: payload,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config)
}


export default companyService
import http from "./CommonHttp";

const controller = 'actor';

const getAll = async ({queryParams}) => http.get(controller);

const ActorService = {
    getAll
}


export default ActorService;
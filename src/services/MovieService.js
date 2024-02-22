import http from "./CommonHttp";

const controller = 'movie';

const getAll = async (queryParams) => http.get(controller, {params: queryParams,});
const getById = async id => http.get(`${controller}/${id}`);
const addMovie = async (movie) => http.post(controller, movie);
const updateMovie = async (id, movie) => http.put(`${controller}/${id}`, movie);
const sofDelete = async id => http.delete(`${controller}/${id}`);

const MovieService = {
    getAll,
    getById,
    addMovie,
    updateMovie,
    sofDelete
}


export default MovieService;
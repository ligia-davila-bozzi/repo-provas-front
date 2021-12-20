import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function getCategories(body) {
    return axios.get(`${BASE_URL}/categories`, body);
}

function getSubjectsWithProfessors(body) {
    return axios.get(`${BASE_URL}/subjects/professors`, body);
}


export {
    getCategories,
    getSubjectsWithProfessors,
}

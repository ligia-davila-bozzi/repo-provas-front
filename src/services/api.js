import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function getCategories() {
    return axios.get(`${BASE_URL}/categories`);
}

function getSubjectsWithProfessors() {
    return axios.get(`${BASE_URL}/subjects/professors`);
}

function postTest(body) {
    return axios.post(`${BASE_URL}/test-register`, body);
}

export {
    getCategories,
    getSubjectsWithProfessors,
    postTest,
}

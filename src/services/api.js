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

function getSubjects() {
    return axios.get(`${BASE_URL}/subjects`);
}

function getTestsBySubject(id) {
    return axios.get(`${BASE_URL}/subjects/${id}/tests`);
}

function getTestsByProfessor(id) {
    return axios.get(`${BASE_URL}/professors/${id}/tests`);
}

function getProfessors() {
    return axios.get(`${BASE_URL}/professors`);
}

export {
    getCategories,
    getSubjectsWithProfessors,
    postTest,
    getSubjects,
    getTestsBySubject,
    getProfessors,
    getTestsByProfessor,
}

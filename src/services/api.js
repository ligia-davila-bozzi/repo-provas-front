import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function getCategories(body) {
    return axios.get(`${BASE_URL}/categories`, body);
}

export {
    getCategories,
}

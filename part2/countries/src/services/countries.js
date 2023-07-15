import axios from 'axios';
const baseUrl='https://studies.cs.helsinki.fi/restcountries/api/all';
const nameUrl='https://studies.cs.helsinki.fi/restcountries/api/name';

const getAll = () => {
    const request = axios.get(baseUrl);
    console.log("fulfilled");
    return request.then(response => response.data);
}

export default { getAll };
import axios from 'axios'

const getAll = () => {
    const request = axios.get('https://restcountries.eu/rest/v2/all')
    return request.then(response => response.data)
}

export default { getAll }
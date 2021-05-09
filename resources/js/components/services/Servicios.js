const baseUrl = "http://localhost/api/catalogos/servicios";
import axios from "axios";
const servicios = {};

servicios.createServicio = async (data) => {
    const UrlCreate = baseUrl + "/create"
    const res = await axios.post(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

servicios.get = async (id) => {
    const UrlGet = baseUrl + "/" + id
    const res = await axios.get(UrlGet)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

servicios.list = async () => {
    const UrlList = baseUrl + "/list"
    const res = await axios.get(UrlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

servicios.update = async (data) => {
    const UrlUpdate = baseUrl + "/" + data.id
    const res = await axios.put(UrlUpdate, data)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

servicios.delete = async (id) => {
    const UrlDelete = baseUrl + "/" + id
    const res = await axios.delete(UrlDelete)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

export default servicios

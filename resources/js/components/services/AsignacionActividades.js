const baseUrl = "http://localhost/api/asignacionActividades";
import axios from "axios";
const asignacionActividades = {};

asignacionActividades.createAsignacion = async (data) => {
    const UrlCreate = baseUrl + "/create"
    const res = await axios.post(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

asignacionActividades.get = async (id) => {
    const UrlGet = baseUrl + "/" + id
    const res = await axios.get(UrlGet)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

asignacionActividades.list = async () => {
    const UrlList = baseUrl + "/list"
    const res = await axios.get(UrlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

asignacionActividades.update = async (data, id) => {
    const UrlUpdate = baseUrl + "/update/" + id
    const res = await axios.post(UrlUpdate, data)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

asignacionActividades.delete = async (id) => {
    const UrlDelete = baseUrl + "/" + id
    const res = await axios.delete(UrlDelete)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

export default asignacionActividades

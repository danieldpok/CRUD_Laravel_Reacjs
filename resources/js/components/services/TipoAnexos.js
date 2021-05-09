const baseUrl = "http://localhost/api/tipoAnexo";
import axios from "axios";
const tipoanexos = {};

tipoanexos.createTipoAnexo = async (data) => {
    const UrlCreate = baseUrl + "/create"
    const res = await axios.post(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

tipoanexos.get = async (id) => {
    const UrlGet = baseUrl + "/" + id
    const res = await axios.get(UrlGet)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

tipoanexos.list = async () => {
    const UrlList = baseUrl + "/list"
    const res = await axios.get(UrlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

tipoanexos.update = async (data) => {
    const UrlUpdate = baseUrl + "/" + data.id
    const res = await axios.put(UrlUpdate, data)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

tipoanexos.delete = async (id) => {
    const UrlDelete = baseUrl + "/" + id
    const res = await axios.delete(UrlDelete)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

export default tipoanexos

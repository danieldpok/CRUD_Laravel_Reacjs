const baseCatUrl = "http://localhost/api/catalogos";
const baseUrl = "http://localhost/api/usuarios";
import axios from "axios";
const usuarios = {};

usuarios.listCatRoles = async () => {
    const urlList = baseCatUrl + "/roles"
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

usuarios.listCatEstados = async () => {
    const urlList = baseCatUrl + "/estados"
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

usuarios.list_catMunicipios = async (id) => {
    const urlList = baseCatUrl + "/municipios/" + id
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

usuarios.create = async (data) => {
    const UrlCreate = baseUrl + "/create"
    const res = await axios.post(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

usuarios.get = async (id) => {
    const UrlGet = baseUrl + "/get/" + id
    const res = await axios.get(UrlGet, id)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

usuarios.list = async () => {
    const UrlList = baseUrl + "/list/"
    const res = await axios.get(UrlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

usuarios.update = async (id) => {
    const UrlUpdate = baseUrl + "/update/" + id
    const res = await axios.get(UrlUpdate, id)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

usuarios.delete = async (id) => {
    const UrlDelete = baseUrl + "/delete/" + id
    const res = await axios.put(UrlDelete, id)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}


export default usuarios

const baseUrl = "http://localhost/api/proyectos";
import axios from "axios";
const proyectos = {};

proyectos.createProyectoName = async (data) => {
    const UrlCreate = baseUrl + "/create"
    const res = await axios.post(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

proyectos.createProyectoInfo = async (data) => {
    const UrlCreate = baseUrl + "/createInfo/" + data.id_proyecto
    const res = await axios.put(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

proyectos.get = async (id) => {
    const UrlGet = baseUrl + "/" + id
    const res = await axios.get(UrlGet)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

proyectos.list = async () => {
    const UrlList = baseUrl + "/list/"
    const res = await axios.get(UrlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

proyectos.update = async (data) => {
    const UrlUpdate = baseUrl + "/" + data.id_proyecto
    const res = await axios.put(UrlUpdate, data)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

proyectos.delete = async (id) => {
    const UrlDelete = baseUrl + "/" + id
    const res = await axios.delete(UrlDelete)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

export default proyectos

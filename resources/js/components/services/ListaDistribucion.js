const baseUrl = "http://localhost/api/listaDistribucion";
import axios from "axios";
const listaDistribucion = {};


listaDistribucion.list = async (idproyecto) => {
    const UrlList = baseUrl + "/" + idproyecto + "/listAll"
    const res = await axios.get(UrlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

listaDistribucion.addEmail = async (data, idProyecto) => {
    const UrlCreate = baseUrl + "/" + idProyecto + "/listAdd/"
    const res = await axios.post(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

listaDistribucion.get = async (id) => {
    const UrlGet = baseUrl + "/" + id
    const res = await axios.get(UrlGet)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

listaDistribucion.update = async (data) => {
    const UrlUpdate = baseUrl + "/" + data.id_proyecto
    const res = await axios.put(UrlUpdate, data)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

listaDistribucion.delete = async (id) => {
    const UrlDelete = baseUrl + "/" + id
    const res = await axios.delete(UrlDelete)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

export default listaDistribucion

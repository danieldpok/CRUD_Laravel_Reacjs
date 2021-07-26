const baseUrl = "http://localhost/api/bandejaActividades";
import axios from "axios";
const bandejaActividades = {};

bandejaActividades.createServicio = async (data, id) => {
    const UrlCreate = baseUrl + "/" + id + "/create"
    const res = await axios.post(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

bandejaActividades.get = async (id) => {
    const UrlGet = baseUrl + "/" + id
    const res = await axios.post(UrlGet)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

bandejaActividades.list = async (estatusActividad) => {
    const UrlList = baseUrl + "/list/" + estatusActividad
    const res = await axios.post(UrlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

bandejaActividades.update = async (data, id) => {
    const UrlUpdate = baseUrl + "/update/" + id
    const res = await axios.post(UrlUpdate, data)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

bandejaActividades.delete = async (id) => {
    const UrlDelete = baseUrl + "/" + id
    const res = await axios.delete(UrlDelete)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

bandejaActividades.encuesta = async (data, id) => {
    const UrlCreate = baseUrl + "/" + id + "/create"
    const res = await axios.post(UrlCreate, data)
        .then(response => { return response.data })
        .catch(error => { return error.response; })
    return res;
}

bandejaActividades.cancelarAsignacion = async (id) => {
    const UrlDelete = baseUrl + "/" + id
    const res = await axios.delete(UrlDelete)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

bandejaActividades.revisionAsignacion = async (id, estatus) => {
    const UrlUpdate = baseUrl + "/" + id + "/solicitarRevision/" + estatus
    console.log(UrlUpdate)
    const res = await axios.put(UrlUpdate)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

export default bandejaActividades

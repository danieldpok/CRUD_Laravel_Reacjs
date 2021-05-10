const baseCatUrl = "http://localhost/api/catalogos";
import axios from "axios";
const catalogos = {};

catalogos.listCatRoles = async () => {
    const urlList = baseCatUrl + "/roles"
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.listCatEstados = async () => {
    const urlList = baseCatUrl + "/estados"
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.list_catMunicipios = async (id) => {
    const urlList = baseCatUrl + "/municipios/" + id
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.list_tecnicos = async () => {
    const urlList = baseCatUrl + "/tecnicos"
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.list_proyectos = async () => {
    const urlList = baseCatUrl + "/proyectos"
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.list_servicios = async () => {
    const urlList = baseCatUrl + "/servicios/list"
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.list_tipoEquipo = async (idproyecto) => {
    const urlList = baseCatUrl + "/tipoEquipo/" + idproyecto
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.list_modeloEquipo = async (idproyecto) => {
    const urlList = baseCatUrl + "/modeloEquipo/" + idproyecto
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.list_modeloMonitor = async (idproyecto) => {
    const urlList = baseCatUrl + "/modeloMonitor/" + idproyecto
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

catalogos.list_preguntas = async () => {
    const urlList = baseCatUrl + "/preguntas/list/"
    const res = await axios.get(urlList)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}

export default catalogos

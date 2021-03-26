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

usuarios.listCatEstados = async () =>{
    const urlList = baseCatUrl + "/estados"
    const res = await axios.get(urlList)
        .then(response => { return response.data})
        .catch(error => { return error;})
    return res;
}

usuarios.list_catMunicipios = async (id) =>{
    const urlList = baseCatUrl + "/municipios/" + id
    const res = await axios.get(urlList)
        .then(response => { return response.data})
        .catch(error => { return error;})
    return res;
}

usuarios.save = async (data) =>{
    const UrlSave = baseUrl + "/usuarios/create"
    const res = await axios.post(UrlSave, data)
        .then(response => { return response.data })
        .catch(error => { return error;})
    return res;
}

export default usuarios

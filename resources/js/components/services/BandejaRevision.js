const baseUrl = "http://localhost/api/bandejaRevision";
import axios from "axios";
const bandejaRevision = {};


bandejaRevision.revisionCancelar = async (data, id) => {
    const UrlUpdate = baseUrl + "/revisionCancelar/" + id
    const res = await axios.post(UrlUpdate, data)
        .then(response => { return response.data })
        .catch(error => { return error; })
    return res;
}


export default bandejaRevision

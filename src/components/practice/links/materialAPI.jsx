import axios from "axios";

axios.defaults.baseURL = "https://67c04c97b9d02a9f224926be.mockapi.io";

export const fetchMaterials = async () => {
    const responce = await axios.get("/materials");
    return responce.data;
}

export const addMaterial = async (values) => {
    const responce = await axios.post("/materials", values);
    return responce.data;
}

export const deleteMaterial = async (id) => {
    const responce = await axios.delete(`/materials/${id}`);
    return responce.data;
}

export const updateMaterial = async (update) => {
    const responce = await axios.put(`/materials/${update.id}`, update);
    return responce.data;
}
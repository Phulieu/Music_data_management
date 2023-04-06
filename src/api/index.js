import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
});

//get all
const getAllAlbums = async () => {
    return api.get('/music');
};

//get by id

const getAlbumsById = async (id) => {
    return api.get(`/music/${id}`);
};

// create
const createAlbum = async (payload) =>{
    return api.post('/music',payload);
};
//update
const updateAlbum = async (id,payload) =>{
    return api.put(`/music/${id}`,payload)
}
//delete

const deleteAlbum = async (id) => {
    return api.delete(`/music/${id}`);
}


const apiCalls = {
    getAllAlbums,
    getAlbumsById,
    createAlbum,
    updateAlbum,
    deleteAlbum
}

export default apiCalls;
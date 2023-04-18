import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    "Content-Type": 'application/json'
});
const setHeader = ()=>{
    return{
        headers: {
        Authorization: `bearer ${sessionStorage.getItem("token")}`
    }
    };
};
// register
const register = async(payload)=>{
    return api.post('/register', payload);
};
// login
const login = async(payload) => {
    const res = await api.post('/login', payload);
    sessionStorage.setItem("token", res.data.token);
    return res;
};
// get all
const getAllAlbums = async () => {
    return api.get('/music', setHeader());
};
// get by id
const getAlbumById = async (id) =>{
    return api.get(`/music/${id}`, setHeader());
};
// create
const createAlbum = async (payload) =>{
    return api.post('/music', payload, setHeader());
};
// update
const updateAlbum = async (id, payload) => {
    return api.put(`/music/${id}`, payload, setHeader());
};
// delete
const deleteAlbum = async (id) => {
    return api.delete(`/music/${id}`, setHeader());
};
const apiCalls = {
    register,
    login,
    getAllAlbums,
    getAlbumById,
    createAlbum,
    updateAlbum,
    deleteAlbum
}
export default apiCalls;
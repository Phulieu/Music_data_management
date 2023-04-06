import { useNavigate } from "react-router-dom";
import apiCalls from "../api";
import { EditForm } from "../components";


const CreateAlbum = () => {
    
    const navigate = useNavigate();


    const handleAlbumCreate = async (album,artist,year,artwork) => {

        const body = {album, artist, year, artwork};
        //make api call
        apiCalls.createAlbum(body).then(() =>{
            //notify succes
            alert("Album is created")
            //send back to list
            navigate('/music/list');

        }).catch((err) => {
            console.log(err);
        });

        
        
    };


    return(
        <EditForm 
            formType= 'Create'
            submitHandler = {handleAlbumCreate}
        />
    );
}

export default CreateAlbum;
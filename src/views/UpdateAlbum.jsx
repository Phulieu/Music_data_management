

import { useEffect,useRef,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { EditForm } from "../components";

import apiCalls from "../api";

const UpdateAlbum = () =>{

    const {id} = useParams();

    const calledAPI = useRef(false);
    

    const [oldAlbum, setOldAlbum] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        if(!calledAPI.current){
            calledAPI.current = true;
            apiCalls.getAlbumsById(id).then(
                (res)=>{
                    setOldAlbum(res.data.data);
                }
            ).catch(console.error);
        }
    }, []);

    const updateSubmitHandler = async (album ,artist ,year, artwork) => {
        
        
        const payload = {album ,artist ,year, artwork};
        
        apiCalls.updateAlbum(id,payload).then(() =>{
            alert("Album updated successfully");
            navigate('/music/list');
        }).catch(console.error)
    }

    return(
        <EditForm 
            formType = "Update"
            aName={oldAlbum.album}
            aArtist={oldAlbum.artist}
            aYear={oldAlbum.year}
            aArt={oldAlbum.artwork}
            submitHandler={updateSubmitHandler}
        />
    )
}

export default UpdateAlbum;
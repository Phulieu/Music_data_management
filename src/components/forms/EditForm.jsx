import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import UserInput from "./UserInput";

const Form = styled.div.attrs({
    className: 'form-group'
})`
    max-width: 1080px;
    margin: auto;
`;

const Title = styled.h1.attrs({
    className: 'h1'
})``;

const Button = styled.button.attrs({
    className: 'btn btn-primary'
})``;

const CancleButton = styled.button.attrs({
    className: 'btn btn-danger'
})`
    margin-left: 5px;;
`;


const EditForm = ({formType, aName='', aArtist='', aYear='', aArt ='', submitHandler }) => {
    const [albumName, setAlbumName] = useState();
    const [albumArtist, setAlbumArtist] = useState();
    const [albumYear, setAlbumYear] = useState();
    const [albumArt, setAlbumArt] = useState();

    const navigate = useNavigate();
    
    return (
        <Form>
            <Title>{formType} Album </Title>
            <label>Album Name:</label>
            <UserInput  initialValue={aName} setValue={setAlbumName}/>
            <label>Album Artist:</label>
            <UserInput  initialValue={aArtist} setValue={setAlbumArtist}/>
            <label>Album Year:</label>
            <UserInput  initialValue={aYear} setValue={setAlbumYear}/>
            <label>Album Artwork:</label>
            <UserInput  initialValue={aArt} setValue={setAlbumArt}/>

            <Button onClick={()=>{
                submitHandler(albumName,albumArtist,albumYear,albumArt)
            }}>{formType} Album</Button>
            <CancleButton onClick ={ () => navigate('/music/list') }>Cancel</CancleButton>
        </Form>
    )
};

export default EditForm;
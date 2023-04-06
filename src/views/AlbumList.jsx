import {  useEffect, useState, useRef } from "react";

import { AgGridReact } from "ag-grid-react";

import apiCalls from "../api";
import styled from "styled-components";

const Div = styled.div.attrs({
    className: "ag-theme-alpine"
})`
    margin: 0 auto;
    height: 70vh;
    width: 1080px;
`;

const updateAlbumHandler = (e) =>{
    window.location.replace(`/music/update/${e.target.name}`);
}

const deleteAlbumHandler = (e) =>{
    if (window.confirm("Are you sure to delete this album?")){
        apiCalls.deleteAlbum(e.target.name).then(() =>{
            window.location.reload();
        }).catch((err) =>{
            console.log(err);
        });
    }
};

const Update = styled.input.attrs((props) =>{
    return (
        {
            type: 'button',
            className: 'btn btn-primary',
            name: props.value,
            value: 'Update',
            onClick: updateAlbumHandler
        }
    )
})`
    cursor: pointer;
    text-allign: center;
    padding: 0 10px;
`;

const Delete = styled.input.attrs((props) => {
    return(
        {
            type: 'button',
            className: 'btn btn-danger',
            name: props.value,
            value :'Delete',
            onClick: deleteAlbumHandler
        }
    )
})`cursor: pointer;
    text-align: center;
    padding: 0 10px;
`;


const AlbumList = () => {

    const [albums, setAlbums] = useState();

    const calledAPI = useRef(false);

    useEffect(()=> {
        if(!calledAPI.current){
            calledAPI.current = true;
            apiCalls.getAllAlbums().then(
                (res) => {
                    setAlbums(res.data.data);
                }
            ).catch(console.error);

        }
    },[]);


    const getAlbumId = (params) =>{
        return params.data['_id'];
    }; 

  

    const col = [
        {field: 'album'},
        {field: 'artist'},
        {field: 'year'},
        {field: 'artwork'},
        {
            cellRenderer: Update,
            valueGetter: getAlbumId,
            width: 110
        },
        {
            cellRenderer: Delete,
            valueGetter: getAlbumId,
            width: 110
        }
    ];

   
    return(
        <Div>
            <AgGridReact 
                rowData = {albums}
                columnDefs={col} 
                
            />
        </Div>
    )
}

export default AlbumList;
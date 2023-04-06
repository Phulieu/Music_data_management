
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.div.attrs({
    className: 'navbar-nav me-auto'
})``;


const Links = () => {
    return (
        <>
            <Link className="navbar-brand"  to ="/">CWEB 602 MERN Application</Link>
            <List>
                <Link className="nav-link" to ="/music/list">List Albums</Link>
                <Link className="nav-link"  to = "/music/create">Create Album</Link>
            </List>
        </>
        
    );
};

export default Links;
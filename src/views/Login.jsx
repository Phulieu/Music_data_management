import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import apiCalls from "../api";
import { AuthForm } from "../components";

const LinkElement = styled.a`
    display: block;
    text-align: center;
`;

const Login = () => {

    const navigate = useNavigate();

    const loginUser = async (username, password) => {
        apiCalls.login({username,password}).then(() => {
            navigate('/music/list')
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <AuthForm 
                formType = "Login"
                onSubmit = {loginUser}
            />

            <LinkElement as={Link} to ='/register'> Click here to register! </LinkElement>
        </>
    )
}

export default Login;
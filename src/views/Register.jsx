import { useNavigate } from "react-router-dom";
import apiCalls from "../api";
import { AuthForm } from "../components";

const Register = () => {

    const navigate = useNavigate();
    const registerUser = async (username, password) => {
        apiCalls.register({username,password}).then( ()=> {
            alert("Account created!")
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    } 

    return (
        <AuthForm formType= 'Register' onSubmit = {registerUser} />
    )
}

export default Register;
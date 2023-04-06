import styled from "styled-components"



const Input = styled.input.attrs({
    className: 'form-control'
})`
    margin-bottom: 5px;
`;

const UserInput = ({setValue, initialValue}) => {
    return (
        <Input 
            type = 'text' 
            placeholder={initialValue}  
            onChange={(e) => {
                setValue(e.target.value);
            }
            }   
        />

    )
};

export default UserInput;

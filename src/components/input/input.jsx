import styled from "styled-components";

const InputForm = styled.input`
    display: inline;
    width: 100%;
    height: 40px;
    margim: 0px;
    outline: none;
    font-size: 16px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    &:focus {
        box-shadow: 0 0 10px rgba(65, 155, 238, 0.8);
        transition: box-shadow 0.3s ease;
    }
    
`

export const Input = ({placeholder, set, type}) => {

    return (
        <>
            <InputForm type={type} placeholder={placeholder} onChange={(e) => {
                set(e.target.value)
            }}></InputForm>
        </>
    )
}

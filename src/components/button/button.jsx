import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ButtonNext = styled.button`
    width: 100%;
    margim: 0;
    padding: 0;
    height: 40px;
    font-family: var(--font-family);
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #419BEE;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background-color: #1e80c7;
        transition: all 0.3s ease;
    }
`

export const Button = ({text, to, type}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <ButtonNext onClick={handleClick} type={type}>{text}</ButtonNext>
    )
}
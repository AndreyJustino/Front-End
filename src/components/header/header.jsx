import styled from "styled-components"
import logoOnfly from "../../assets/img/logoOnfly.png"
import { Link } from "react-router-dom";

const Cabecalho = styled.header`
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    
`

const Moldura = styled.div`
    widht: 55px;
    height: 55px;
`

const Logo = styled.img`
    widht: 100%;
    height: 100%;
`

const Div = styled.div`
    display: flex;
    gap: 10px
`

const ButtonWhite = styled.button`
    color: #0597FA;
    widht: 50px;
    height: 50px;
    font-family: var(--font-family);
    font-size: 16px;
    padding: 5px;
    border: none;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
`

const ButtonBlue = styled.button`
    cursor: pointer;
    color: white;
    widht: 50px;
    height: 50px;
    font-family: var(--font-family);
    font-size: 16px;
    padding: 10px;
    border: none;
    font-weight: 600;
    background-color: #0597FA;
    border-radius: 10px;
`


export const Header = () => {
    return(
        <Cabecalho>
            <Link to={"/"}>
                <Moldura>
                    <Logo src={logoOnfly} alt="Logo Onfly"/>
                </Moldura>
            </Link>
            
            <Div>
                <Link to={"/loginUser"}>
                    <ButtonWhite>Entrar</ButtonWhite> 
                </Link>

                <Link to={"/registerUser"}>
                    <ButtonBlue>Cadastre-se</ButtonBlue>               
                </Link>

            </Div>
        </Cabecalho>
    )
}
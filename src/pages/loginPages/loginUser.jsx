import {useState} from 'react'
import { Button } from '../../components/button/button.jsx'
import { Input } from '../../components/input/input.jsx'
import styled from 'styled-components'
import imgUrl from "../../assets/img/fundoLoginUsuario.png"
import imgLogo from "../../assets/img/logoOnfly.png"
import { useNavigate, Link } from 'react-router-dom'
import api from "../../services/apiService.jsx"

const Main = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #0597FA;
    align-items: center;
`

const SectionImg = styled.section`
    background-image: url(${imgUrl});
    background-size: cover;
    background-position: center;
    width: 50%;
    height: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Forms = styled.form`
    margin: 0 auto;
    display: flex;
    background-color: white;
    height: 500px;
    border-radius: 10px;
    flex-direction: column;
    gap:15px;
    padding: 25px;
    min-width: 60%;

    @media (min-width: 768px) {
        min-width: 40%   
    }
`

const Div = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const Label = styled.label`
    font-size: 18px;
    font-family: var(--font-family);
    font-weight: 400;
    color: #7C7C7C;
`

const Moldura = styled.div`
    widht: 60px;
    height: 60px;
    margin: 0 auto;
`

const Img = styled.img`
    widht: 100%;
    height: 100%;
`

const Paragrafo = styled.p`
    color: #0077FF;
    font-size: 18px;
    font-family: var(--font-family);
    text-align: right;
    cursor: pointer;
`

const SubParagrafo = styled.p`
    color: #0077FF;
    font-size: 18px;
    font-family: var(--font-family);
    text-align: center;
    cursor: pointer;
`

export const LoginUser = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    async function loginUser(e) {
        e.preventDefault();
        try{
            const response = await api.post("/loginPerson", { email, password });
                    
            console.log("Login bem-sucedido:", response.data);
      
            navigate("/");
        }catch(error){
            console.log("Erro ao fazer login:", error.response?.data || error.message)
        }
    }
  return (
    <>
        <Main>
            <SectionImg></SectionImg>
            <Forms autoComplete='off' onSubmit={loginUser}>
                <Moldura>
                    <Img src={imgLogo}></Img>
                </Moldura>
                <Div>
                    <Label htmlFor="email">Qual seu e-mail ?</Label>
                    <Input type="email" placeholder="Digite seu E-mail" id="email" set={setEmail}/>
                </Div>
                
                <Div>
                    <Label htmlFor="senha">Agora sua senha</Label>
                    <Input type="password" placeholder="Digite sua senha" id="senha" set={setPassword}/>
                </Div>
                <Link to="/loginCompany" style={{ textDecoration: 'none' }}>
                    <Paragrafo>Sou Empresa ?</Paragrafo>
                </Link>
                <Button text={"Vamos !"} type={"submit"}></Button>
                <Link to="/registerUser" style={{ textDecoration: 'none' }}>
                    <SubParagrafo>Não tenho cadastro</SubParagrafo>
                </Link>
            </Forms>
        </Main>
    </>
  )
}

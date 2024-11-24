import styled from "styled-components"
import { HeaderRegister } from "../../components/headerRegister/headerRegister"
import { Input } from "../../components/input/input"
import { Button } from "../../components/button/button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


const Main = styled.main`
    background-color: #0597FA;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    height: auto;
    width: 50vw;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px
`

const Titulo = styled.h1`
    text-align: center;
    font-family: var(--font-family);
`

const Div = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const Container = styled.div`
    min-height: 30px;
    display: flex;
    gap: 15px;
`

const Label = styled.label`
    font-size: 18px;
    font-family: var(--font-family);
    font-weight: 400;
    color: #7C7C7C;
`

const Paragrafo = styled.p`
    color: #0077FF;
    font-size: 18px;
    font-family: var(--font-family);
    text-align: left;
    cursor: pointer;
`

export const RegisterUser = () => {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [idade, setIdade] = useState()
    const [telefone, setTelefone] = useState()

    async function registerUser(e) {
        e.preventDefault()
        try{
            // dados chegando aqui só manda pro back
            console.table({name,email,password,idade,telefone})

            navigate("/")
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <HeaderRegister></HeaderRegister>
            <Main>
                <Form autoComplete="off" onSubmit={registerUser}>
                    <Titulo>Cadastre-se</Titulo>
                    <Div>
                        <Label htmlFor="nome">Nome:</Label>
                        <Input type={"text"} placeholder={"Digite seu nome"} id='nome' set={setName}></Input>
                    </Div>
                    <Div>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type={"email"} placeholder={"Digite seu email"} id='email' set={setEmail}></Input>
                    </Div>
                    
                    <Container>
                        <Div>
                            <Label htmlFor="senha">Senha:</Label>
                            <Input type={"password"} placeholder={"Digite sua senha"} set={setPassword} id='senha' minLength={8}></Input>
                        </Div>
                        <Div>
                            <Label htmlFor="idade">Idade:</Label>
                            <Input set={setIdade} type={"number"} placeholder={"Digite sua idade"} id='idade' min={18}></Input>
                        </Div>
                    </Container>

                    <Div>
                        <Label htmlFor="telefone">Telefone:</Label>
                        <Input set={setTelefone} type={"tel"} placeholder={"(xx) xxxxx-xxxx"} id='telefone'></Input>
                    </Div>
                    <Link to="/registerCompany" style={{ textDecoration: 'none' }}>
                        <Paragrafo>Sou Empresa</Paragrafo>
                    </Link>
                    <Button text={"Cadastrar"} type={"submit"}></Button>
                </Form>
            </Main>

        </>
    )
}
import styled from "styled-components"
import { HeaderRegister } from "../../components/headerRegister/headerRegister"
import { Input } from "../../components/input/input"
import { Button } from "../../components/button/button"
import { Link, useNavigate } from "react-router-dom"


const Main = styled.main`
    background-color: #0597FA;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    height: 90%;
    width: 50vw;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 550px;
    display: flex;
    flex-direction: column;
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
    return (
        <>
            <HeaderRegister></HeaderRegister>
            <Main>
                <Form>
                    <Titulo>Cadastre-se</Titulo>
                    <Div>
                        <Label htmlFor="nome">Nome:</Label>
                        <Input type={"text"} placeholder={"Digite seu nome"} id='nome'></Input>
                    </Div>
                    <Div>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type={"email"} placeholder={"Digite seu email"} id='email'></Input>
                    </Div>
                    
                    <Container>
                        <Div>
                            <Label htmlFor="senha">Senha:</Label>
                            <Input type={"password"} placeholder={"Digite sua senha"} id='senha' minLength={8}></Input>
                        </Div>
                        <Div>
                            <Label htmlFor="idade">Idade:</Label>
                            <Input type={"number"} placeholder={"Digite sua idade"} id='idade' min={18}></Input>
                        </Div>
                    </Container>

                    <Div>
                        <Label htmlFor="telefone">Telefone:</Label>
                        <Input type={"tel"} placeholder={"(xx) xxxxx-xxxx"} id='telefone' pattern={"/^\(\d{2}\) \d{5}-\d{4}$/"}></Input>
                    </Div>
                    <Link to="/registerCompany" style={{ textDecoration: 'none' }}>
                        <Paragrafo>Sou Empresa</Paragrafo>
                    </Link>
                    <Button text={"Cadastrar"} type={"submit"} to={""}></Button>
                </Form>
            </Main>

        </>
    )
}
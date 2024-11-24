import React, { useState } from 'react'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import styled from 'styled-components'
import { HeaderRegister } from '../../components/headerRegister/headerRegister'
import { useNavigate } from 'react-router-dom'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #0597FA;
`;

const Forms = styled.form`
    margin: 2rem auto;
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
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;



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

const Parag = styled.p`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 1.3rem ;
    width: 100%;
    height: 100%;
`;
const Paragraf = styled.p`
    display: flex;
    justify-content: end;
    font-family: 'Lato', sans-serif;
    color: #0077FF;
`;

export const RegisterCompany = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [telefone, setTelefone] = useState()
  const [cnpj, setCnpj] = useState()
  const [endereco, setEndereco]= useState()
  const navigate = useNavigate()

  async function registerCompany(e) {
    e.preventDefault()
    try{
      // dados ja estão chegando aqui só manda pro back
      console.table({name,email,password,telefone,cnpj,endereco})

      navigate("/")
    }catch(error){
      console.log(error)
    }
  }

    return (
      <>
        <Main>
          <HeaderRegister/>
          <Forms autoComplete="off" onSubmit={registerCompany}>
            <Moldura>
              <Parag>Cadastre sua Empresa</Parag>
            </Moldura>
            <Container>
              <Div>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" set={setName}/>
              </Div>
              
              <Div>
                <Label htmlFor="phone">Telefone</Label>
                <Input type="text" id="phone" set={setTelefone}/>
              </Div>
              
              <Div>
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input type="text" id="cnpj" set={setCnpj}/>
              </Div>
              
              <Div>
                <Label htmlFor="email">E-Mail</Label>
                <Input type="email" id="email" set={setEmail}/>
              </Div>
              
              <Div>
                <Label htmlFor="address">Endereço</Label>
                <Input type="text" id="address" set={setEndereco}/>
              </Div>
              
              <Div>
                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" set={setPassword}/>
              </Div>
            </Container>
            
            <Paragraf>
              <a href="/registerUser">Sou cliente?</a>
            </Paragraf>
            
            <Button text={"Cadastrar"} type={"submit"}/>
          </Forms>
        </Main>
      </>
    );
  };
  
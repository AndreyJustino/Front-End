import React from 'react'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import styled from 'styled-components'
import { HeaderRegister } from '../../components/headerRegister/headerRegister'

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
    return (
      <>
        <Main>
      <HeaderRegister/>
          <Forms autoComplete="on">
            <Moldura>
              <Parag>Cadastre sua Empresa</Parag>
            </Moldura>
            <Container>
              <Div>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" />
              </Div>
              
              <Div>
                <Label htmlFor="phone">Telefone</Label>
                <Input type="text" id="phone" />
              </Div>
              
              <Div>
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input type="text" id="cnpj" />
              </Div>
              
              <Div>
                <Label htmlFor="email">E-Mail</Label>
                <Input type="email" id="email" />
              </Div>
              
              <Div>
                <Label htmlFor="address">Endereço</Label>
                <Input type="text" id="address" />
              </Div>
              
              <Div>
                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" />
              </Div>
            </Container>
            
            <Paragraf>
              <a href="/registerUser">Sou cliente?</a>
            </Paragraf>
            
            <Button text={"Cadastrar"} to={"/"} />
          </Forms>
        </Main>
      </>
    );
  };
  
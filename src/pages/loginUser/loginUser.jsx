import React from 'react'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import styled from 'styled-components'
import imgUrl from "../../assets/img/fundoLoginUsuario.png"
import imgLogo from "../../assets/img/logoOnfly.png"

const Main = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    border: 2px solid red;
    background-color: #0597FA;
    align-items: center;
`

const SectionImg = styled.section`
    background-image: url(${imgUrl});
    background-size: cover;
    background-position: center;
    width: 50%;
    height: 100%;
    border: 2px solid green;

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
    // height: 60px;
    // padding: 15px;
    gap: 10px;
    // border: 2px solid yellow
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

export const LoginUser = () => {
  return (
    <>
        <Main>
            <SectionImg></SectionImg>
            <Forms autoComplete='off'>
                <Moldura>
                    <Img src={imgLogo}></Img>
                </Moldura>
                <Div>
                    <Label htmlFor="email">Qual seu e-mail ?</Label>
                    <Input type="email" placeholder="Digite seu E-mail" id="email" />
                </Div>
                
                <Div>
                    <Label htmlFor="senha">Agora sua senha</Label>
                    <Input type="password" placeholder="Digite sua senha" id="senha"/>
                </Div>
                <Button text={"Vamos !"} to={"/"}></Button>
            </Forms>
        </Main>
    </>
  )
}

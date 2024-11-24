import { useState } from 'react';
import api from '../../services/apiService.jsx';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import styled from 'styled-components';
import { HeaderRegister } from '../../components/headerRegister/headerRegister';
import { useNavigate , Link } from 'react-router-dom';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  // width: 100vw;
  height: 100vh;
  background-color: #0597FA;
`;

const Forms = styled.form`
  margin: 2rem auto;
  display: flex;
  background-color: white;
  height: 550px;
  border-radius: 10px;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  min-width: 60%;

  @media (min-width: 768px) {
    min-width: 40%;
  }
`;

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
`;

const Label = styled.label`
  font-size: 18px;
  font-family: var(--font-family);
  font-weight: 400;
  color: #7C7C7C;
`;

const Moldura = styled.div`
  widht: 60px;
  height: 60px;
  margin: 0 auto;
`;

const Parag = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.3rem ;
  width: 100%;
  height: 100%;
`;

const Paragraf = styled.p`
    color: #0077FF;
    font-size: 18px;
    font-family: var(--font-family);
    display: flex;
    justify-content: end;
    cursor: pointer;
    text-decoration: none;
`;

export const RegisterCompany = () => {
  const [name, setName] = useState();
  const [responsiblePerson, setNameRes] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setTelefone] = useState();
  const [cnpj, setCnpj] = useState();
  const [address, setEndereco] = useState();
  const navigate = useNavigate();

  async function registerCompany(e) {
    e.preventDefault();

    if (!responsiblePerson) {
      alert("O nome do responsável é obrigatório.");
      return;
    }

    try {
      const response = await api.post('/user/company', {
        name,
        email,
        password,
        phoneNumber,
        cnpj,
        address,
        responsiblePerson
      });

      console.log('Company registered:', response.data);
      navigate('/'); 
    } catch (error) {
      console.error('Error registering company:', error);
    }
  }

  return (
    <>
      <HeaderRegister />
      <Main>
        <Forms autoComplete="off" onSubmit={registerCompany}>
          <Moldura>
            <Parag>Cadastre sua Empresa</Parag>
          </Moldura>
          <Container>
            <Div>
              <Label htmlFor="name">Nome</Label>
              <Input type="text" id="name" set={setName} />
            </Div>

            <Div>
              <Label htmlFor="phone">Telefone</Label>
              <Input type="text" id="phone" set={setTelefone} />
            </Div>

            <Div>
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input type="text" id="cnpj" set={setCnpj} />
            </Div>

            <Div>
              <Label htmlFor="email">E-Mail</Label>
              <Input type="email" id="email" set={setEmail} />
            </Div>

            <Div>
              <Label htmlFor="address">Endereço</Label>
              <Input type="text" id="address" set={setEndereco} />
            </Div>

            <Div>
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" set={setPassword} />
            </Div>
            <Div>
              <Label htmlFor="nameRes">Nome do responsável</Label>
              <Input type="text" id="nameRes" set={setNameRes} />
            </Div>
          </Container>

          <Link to="/registerUser" style={{ textDecoration: 'none' }}>
                        <Paragraf>Sou Cliente?</Paragraf>
                    </Link>

          <Button text={"Cadastrar"} type={"submit"} />
        </Forms>
      </Main>
    </>
  );
};

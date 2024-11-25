import styled from "styled-components"
import { Header } from "../../components/header/header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Images from '../../assets/images'

const Main = styled.main`
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-position: center;
    font-family: var(--font-family);
    /* border: red solid; */
    `

// filter: blur(2px);
const Overlay = styled.section`
    background-color: rgba(0, 0, 0, 0.442);
    z-index: 21;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CardContainer = styled.section`
    display: flex;
    max-width: 1040px;
    width: 100%;
    
    @media (max-width: 1150px) {
        padding: 0px 30px;
    }
`

const Moldura = styled.div`
    width: 500px;
    height: auto;
    /* border: red solid; */
    @media (max-width: 1150px) {
        display: none;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px 0px 0px 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 1150px) {
        display: none;
    }
`

const Card = styled.div`
    width: 100%;
    height: auto;
    background-color: #ffffff;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 35px 80px 35px 40px;
    border-radius: 0px 4px 4px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const TittleAndStars = styled.div`

`

const Titulo = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    color: #192A3D;

`

const Paragrafo = styled.p`
    /* text-align: justify; */
    font-size: 16px;
    font-weight: 600;
`

const SubParagrafo = styled.p`
    font-weight: 600;
    font-size: .8rem;
    display: flex;
    align-items: center;

    color: #3e3e3e;
    gap: 5px;
    /* border: red solid; */
`

// const Categoria = styled.p`
//     font-size: 16px;
//     font-weight: 600;
// `

const Icon = styled.img`
    width: 20px;
    height: 20px;
`

const WeOffer = styled.div`
    /* border: red solid 1px; */
`

const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: .8rem;
    /* border: red solid; */
`

const TittleWeOffer = styled.div`
    margin-bottom: 4px;
    font-weight: 600;
    /* border: red solid 1px; */
`

const IconsWeOffer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Configura no máximo 3 colunas */
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Ajusta dinamicamente */
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* Em telas menores, ajusta para uma única coluna */
    }
`

const Div = styled.div`
    display: flex;
    width: 100%;
    /* border: red solid; */
    justify-content: end;
`

const ButtonHire = styled.button`
    padding: 15px 30px;
    border: none;
    border-radius: 6px;
    color: #FFF;
    font-weight: 600;
    background-color: #1E1E1E;
    width: 9rem;
    cursor: pointer;
    margin-top: 10px;
    /* border: red solid; */

    &:hover {
        background-color: #333333;
        transition: .4s ease-in-out;
    }
`

export const AboutHosting = () => {
    const { id } = useParams();
    const [image, setImage] = useState("")
    const [stars, setStars] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState(``)
    const [address, setAddress] = useState("")
    const [categoria, setCategoria] = useState("")
    const [starts, setStart] = useState()
    
    useEffect(async ()  => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://back-end-216p.onrender.com/hotels/${id}`)
                if (!response.ok) {
                    throw new Error('Erro na requisição')
                }
                const data = await response.json()
                return data
            } catch (error) {
                console.error('Erro:', error);
            }
        };
    
        const data = await fetchData();

        setImage(data.data.thumb)
        setStars(data.data.stars)
        setTitle(data.data.name)
        setDescription(data.data.description)
        setAddress(data.data.address)
    }, []); 
    

    return (
        <>
            <Header></Header>
            <Main style={{ backgroundImage: `url(${image})`}}>
                <Overlay>
                    <CardContainer>
                        <Moldura>
                            <Img src={image} alt="Imagem de fundo"></Img>
                        </Moldura>
                        <Card>
                            <TittleAndStars>
                                <Titulo>{title}</Titulo>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                {/* criar um loop pra repetir os icons de acordo com a quantidade de estrelas que tem na base de dados */}
                            </TittleAndStars>
                            <Paragrafo>{description}</Paragrafo>
                            <SubParagrafo>
                                <Icon src={Images.Location} />{address}
                            </SubParagrafo>
                            <WeOffer>
                                <TittleWeOffer>O que oferecemos:</TittleWeOffer>
                                <IconsWeOffer>
                                    {/* <abbr title="Wifi"><img src={Images.Wifi} alt="" width={15}/></abbr> */}
                                    <Span><img src={Images.Wifi} alt="" width={15}/>Wifi</Span>
                                    <Span><img src={Images.Restaurant} alt="" width={15}/>Restaurante</Span>
                                    <Span><img src={Images.Car} alt="" width={15}/>Estacionamento</Span>
                                    <Span><img src={Images.Coffee} alt="" width={15}/>Café da manhã</Span>
                                </IconsWeOffer>
                            </WeOffer>
                            {/* <Categoria>{categoria}</Categoria> */}
                            <Div>
                                <ButtonHire>ALUGAR</ButtonHire>
                            </Div>
                        </Card>
                    </CardContainer>

                </Overlay>
            </Main>

        </>
    )
}
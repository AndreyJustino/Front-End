import styled from "styled-components"
import { Header } from "../../components/header/header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import iconLoc from "../../assets/icon/iconLocalizacao.png"

const Main = styled.main`
    widht: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;

`

const Overlay = styled.section`
    background-color: rgba(0, 0, 0, 0.442);
    z-index: 21;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Moldura = styled.div`
    widht: 30vw;
    height: 50vh;
    
`

const Img = styled.img`
    widht: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px
`

const Card = styled.div`
    width: 50vw;
    height: 50vh;
    background-color: #ffffff;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 20px;
    border-radius: 0px 10px 10px 0px
`

const Titulo = styled.h1`
    font-size: 24px;
    font-family: var(--font-family);

`

const Paragrafo = styled.p`
    font-family: var(--font-family);
    text-align: justify;
    font-size: 16px;
`

const SubParagrafo = styled.p`
    font-family: var(--font-family);    
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
`

const Categoria = styled.p`
    font-family: var(--font-family);  
    font-size: 16px;
    font-weight: 600;
`

const Icon = styled.img`
    witdh: 20px;
    height: 20px;
`

export const AboutHosting = () => {
    const { id } = useParams();
    const [image, setImage] = useState("https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg")
    const [title, setTitle] = useState("Lua Nova Hotel")
    const [description, setDescription] = useState(`Situado a 250 m pela saída lateral do Terminal Rodoviário Tietê/Metro Portuguesa-Tietê,. A 5min.de carro do Anhembi Centro de exposições, 10min de caminhada do Expo Center Norte, 3min. de caminhada do Shopping Center Norte, O Aeroporto Internacional de Guarulhos fica a 22,7 km de distância aprox. 25/30min. de carro.
 Os quartos claros são decorados em tons agradáveis, todos os quartos do Hotel Lua Nova possuem TV e roupa de cama, banheiro privativo, Wifi e café da manhã gratuito.
    `)
    const [address, setAddress] = useState("R. Cel. Antônio de Carvalho , 269")
    const [categoria, setCategoria] = useState("Hotel")
    const [starts, setStart] = useState()
    
    useEffect(() => {
        try{

        }catch(error){
            console.log(error);
        }
    }, [])

    return (
        <>
            <Header></Header>
            <Main style={{ backgroundImage: `url(${image})`}}>
                <Overlay>
                    <Moldura>
                        <Img src={image} alt="Imagem de fundo"></Img>
                    </Moldura>
                    <Card>
                        <Titulo>{title}</Titulo>
                        <Paragrafo>{description}</Paragrafo>
                        <SubParagrafo>
                            <Icon src={iconLoc} />{address}
                        </SubParagrafo>
                        <Categoria>{categoria}</Categoria>
                    </Card>

                </Overlay>
            </Main>

        </>
    )
}
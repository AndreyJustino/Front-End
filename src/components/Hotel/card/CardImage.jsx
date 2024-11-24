import { useEffect, useState } from "react";
import Images from "../../../assets/images";
import styled from "styled-components";

const ImageStyled = styled.div`
  min-width: 385px;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center;

  background-size: cover;

  @media (max-aspect-ratio: 1) {
    display: none;
  }
`;

export function CardImage({ imageUrl }) {
  const [backgroundImage, setBackgroundImage] = useState(
    Images.HotelPlaceholder
  );

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => setBackgroundImage(imageUrl); // Imagem carregou com sucesso
    img.onerror = () => setBackgroundImage(Images.HotelPlaceholder); // Erro ao carregar a imagem
  }, [imageUrl, Images.HotelPlaceholder]);

  return <ImageStyled image={backgroundImage} />;
}

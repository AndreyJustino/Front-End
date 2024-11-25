/* eslint-disable react/prop-types */

import styled from "styled-components";
import { CardCategory } from "./CardCategory";
import { useNavigate } from "react-router-dom";
import Images from "../../../assets/images";
import { CardImage } from "./CardImage";
import { CardIcons } from "./CardIcons";

const HotelCardContainer = styled.div`
  display: flex;
  margin: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  & .infos-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    background: #edf2fa;

    flex-grow: 1;

    padding: 40px;
  }

  & .button-container {
    display: flex;
    margin-top: auto;
  }

  & button {
    margin-left: auto;
  }

  @media (max-aspect-ratio: 1) {
    & .infos-container {
      padding: 20px;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 150%;
  margin: 0;
  padding: 0;
`;

const CardDescription = styled.p`
  font-size: 20px;
  margin: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;

  @media (max-aspect-ratio: 1) {
    font-size: 15px;
  }
`;

const AboutButton = styled.button`
font-size: 1.2rem;
font-weight: 600;
  padding: 20px 0px;
  width: 180px;

  border-radius: 4px;
  border: none;

  color: var(--card-button-foreground);
  background-color: var(--card-button-background);
  transition: scale 0.2s;
  cursor: pointer;

  &:active {
    scale: 1;
  }

  @media (max-aspect-ratio: 1) {
    font-size: 15px;
    padding: 10px 20px;

    border-radius: 5px;
  }
`;

// [
//   {
//     "key": "WI_FI",
//     "label": "Internet"
//   },
//   {
//     "key": "BREAKFAST",
//     "label": "Café da manhã"
//   },
//   {
//     "key": "PARKING",
//     "label": "Estacionamento"
//   },
//   {
//     "key": "RESTAURANT",
//     "label": "Restaurante"
//   }
// ]

export function HotelCard({ hotel }) {
  const {
    name = "Nome não disponível",
    description = "Descrição indisponível",
    thumb = Images.HotelPlaceholder,
    category,
    id,
    amenities = [],
  } = hotel;

  const navigate = useNavigate();

  function redirectToHotelPage(id) {
    navigate("/aboutHosting/" + id);
  }

  return (
    <HotelCardContainer>
      <CardImage imageUrl={thumb} />
      <div className="infos-container">
        <CardTitle>{name || "Nome indisponível"}</CardTitle>
        <CardDescription>
          {description || "Descrição indisponível"}
        </CardDescription>
        <CardCategory category={category} />
        <CardIcons icons={amenities} />
        <div className="button-container">
          <AboutButton onClick={(_) => redirectToHotelPage(id)}>
            Saiba Mais
          </AboutButton>
        </div>
      </div>
    </HotelCardContainer>
  );
}

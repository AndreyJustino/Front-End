/* eslint-disable react/prop-types */

import styled from "styled-components";
import { CardCategory } from "./CardCategory";
import { useNavigate } from "react-router-dom";

const HotelCardContainer = styled.div`
  display: flex;

  /* /* width: 1220px; */
  /* height: 280px; */

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & img {
    width: 385px;
    height: 280px;

    object-fit: fill;
  }

  & .infos-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    background: var(--card-background);

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
    & img {
      display: none;
    }

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
  padding: 15px 30px;

  border-radius: 10px;
  border: none;

  color: var(--card-button-foreground);
  background-color: var(--card-button-background);
  transition: scale 0.2s;

  &:hover {
    scale: 1.02;
    cursor: pointer;
  }

  &:active {
    scale: 1;
  }

  @media (max-aspect-ratio: 1) {
    font-size: 15px;
    padding: 10px 20px;

    border-radius: 5px;
  }
`;

export function HotelCard({ hotel }) {
  const { name, description, thumb, category, id } = hotel;
  const navigate = useNavigate();

  function redirectToHotelPage(id) {
    navigate("aboutHosting/" + id);
  }

  return (
    <HotelCardContainer>
      <div>
        <img src={thumb} alt="" />
      </div>
      <div className="infos-container">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardCategory category={category} />
        <div className="button-container">
          <AboutButton onClick={(_) => redirectToHotelPage(id)}>
            Saiba Mais
          </AboutButton>
        </div>
      </div>
    </HotelCardContainer>
  );
}

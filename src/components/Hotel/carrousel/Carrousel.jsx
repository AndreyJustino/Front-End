import styled from "styled-components";

const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 320px);
  gap: 10px;

  @media (max-width: 1366px) {
    width: calc(100vw - 40px);
  }
`;

const Tittle = styled.h3`
  font-size: 1.3rem;
  font-weight: 900;
  color: #192A3D;
  margin: 40px 0 20px 0;
`

const ImagesContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  /* border: red solid; */
  flex-wrap: nowrap;

  & div {
    height: 230px;
    width: 350px;

    outline: none;
    background: none;
  }

  & img {
    width: 100%;
    height: 100%;
    /* border: red solid; */
    border-radius: 8px;
    opacity: .8;
    box-shadow: rgba(50, 50, 93, 3) 0px 30px 80px -12px inset, rgba(0, 0, 0, 0.3) 100px 18px 360px -18px inset;

    &:hover {
      box-shadow: none
    }

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: .4s ease-in-out;

    &:hover {
      transform: scale(1.03);
      opacity: 1;
    }
  }

  @media (max-width: 1366px) {
  }

  @media (max-aspect-ratio: 1) {
    overflow-x: scroll;
    scrollbar-width: none;

    width: calc(100vw - 40px);

    & div:nth-child(n) {
      height: 150px;
      width: 200px;

      flex-shrink: 0;
    }
  }
`;

export function Carrousel({ images }) {
  return (
    <CarrouselContainer>
      <Tittle>Recomendações para Você</Tittle>
      <ImagesContainer>
        {images.map((image, index) => (
          <div key={index}>
            <img style={{ backgroundImage: `url(${image})` }} />
          </div>
        ))}
      </ImagesContainer>
    </CarrouselContainer>
  );
}

import styled from "styled-components";

const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 0;
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 20px;

  flex-wrap: nowrap;
  place-items: center;

  & div {
    height: 230px;
    flex-grow: 1;
  }

    & div:nth-child(1),
  & div:nth-child(5) {
    height: 180px;
  }
  
  & div:nth-child(2),
  & div:nth-child(4) {
    height: 200px;
  }

  & img {
    width: 100%;
    height: 100%;

    background-size: fill;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export function Carrousel({ images }) {
  return (
    <CarrouselContainer>
      <h3>Recomendacoes para voce</h3>
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

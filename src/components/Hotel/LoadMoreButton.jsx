import styled from "styled-components";

const LoadMoreButtonStyled = styled.button`
  padding: 20px;
  font-size: 20px;
  background-color: var(--card-button-background);
  color: var(--card-button-foreground);

  border: none;
  border-radius: 10px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  &:active {
    filter: brightness(1);
    scale: 0.995;
  }
`;

export function LoadMoreButton({ onclick }) {
  return (
    <LoadMoreButtonStyled onClick={onclick}>Carregar Mais</LoadMoreButtonStyled>
  );
}

import styled from "styled-components";

const LoadMoreButtonStyled = styled.button`
  padding: 20px;
  background-color: var(--card-button-background);
  color: var(--card-button-foreground);

  border: none;
  border-radius: 10px;
`;

export function LoadMoreButton({ onclick }) {
  return (
    <LoadMoreButtonStyled onClick={onclick}>Carregar Mais</LoadMoreButtonStyled>
  );
}

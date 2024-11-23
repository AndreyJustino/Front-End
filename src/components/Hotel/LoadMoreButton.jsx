import styled from "styled-components";

const LoadMoreButtonStyled = styled.button`
  padding: 20px;
`;

export function LoadMoreButton({ onclick }) {
  return (
    <LoadMoreButtonStyled onClick={onclick}>Carregar Mais</LoadMoreButtonStyled>
  );
}

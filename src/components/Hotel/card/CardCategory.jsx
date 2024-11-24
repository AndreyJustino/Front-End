import styled from "styled-components";

const CategorySpan = styled.span`
  padding: 10px 20px;
  border-radius: 5px;

  background-color: ${({ bgColor }) => bgColor || "blue"};

  text-transform: capitalize;
  margin-right: auto;

  @media (max-aspect-ratio: 1) {
    font-size: 15px;
    padding: 5px 10px;
  }
`;

const categoriesColors = {
  hotel: "#A8D5E2",
  pousada: "#F9D5E5",
  "hostel ou albergue": "#fce8c4",
  resort: "#d7ecc5",
  "hotel fazenda": "#f5d9a1",
  "pousada ou flat/apart hotel": "#e5c9f9",
};

// eslint-disable-next-line react/prop-types
export function CardCategory({ category }) {
  return (
    <CategorySpan bgColor={categoriesColors[category.toLowerCase()]}>
      {category}
    </CategorySpan>
  );
}

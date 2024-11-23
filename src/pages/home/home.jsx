import styled from "styled-components";
import { HotelCard } from "../../components/Hotel/card/HotelCard";
import { useEffect, useState } from "react";

const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 150px;
`;

const SectionLayout = styled.section`
  display: grid;

  grid-template-columns: 1fr 3fr;
  gap: 50px;

  padding: 10px 150px;
`;

const HotelsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 70px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & select {
    margin-bottom: auto;

    padding: 10px;
  }
`;

const HomeMain = styled.main`
  font-family: var(--font-family);
`;

export const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function getHotels() {
      const response = await fetch("http://localhost:3000/hotels");
      const htls = await response.json();

      hotels.push(...htls);
      setHotels([...hotels]);
    }

    getHotels();
  }, []);

  return (
    <HomeMain>
      <CarrouselContainer>
        <h3>Recomendacoes para voce</h3>
        <span>images</span>
      </CarrouselContainer>
      <SectionLayout>
        <FilterContainer>
          <label htmlFor="select-filter">Filtrar Por</label>
          <select name="" id="select-filter">
            <option value="">Hotel</option>
            <option value="">Resort</option>
            <option value="">HOTEL</option>
            <option value="">HOTEL</option>
            <option value="">HOTEL</option>
          </select>
        </FilterContainer>
        <HotelsContainer>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </HotelsContainer>
      </SectionLayout>
    </HomeMain>
  );
};

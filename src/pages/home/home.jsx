import styled from "styled-components";
import { HotelCard } from "../../components/Hotel/card/HotelCard";
import { useEffect, useState } from "react";
import { LoadMoreButton } from "../../components/Hotel/LoadMoreButton";

const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 150px;
`;

const SectionLayout = styled.section`
  display: grid;

  grid-template-columns: 1fr 3fr;
  gap: 50px;

  padding: 20px 150px;
`;

const HotelsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 70px;
  max-height: 100vh;

  overflow-y: scroll;
  scrollbar-width: none;
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
  padding: 20px 0;
`;

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelsPage, setHotelsPage] = useState(1);
  const [hasMoreToLoad, setHasMoreToLoad] = useState(true);

  function loadMoreHotels() {
    console.log(hotelsPage);
    setHotelsPage(hotelsPage + 1);
  }

  useEffect(() => {
    async function getHotels() {
      try {
        const response = await fetch(
          "http://localhost:3000/hotels?page=" + hotelsPage
        );
        const htls = await response.json();

        if (htls.length == 0) {
          return setHasMoreToLoad(false);
        }

        hotels.push(...htls);
        setHotels([...hotels]);
      } catch (error) {
        console.log(error);
      }
    }

    getHotels();
  }, [hotelsPage]);

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
          {hasMoreToLoad && <LoadMoreButton onclick={loadMoreHotels} />}
        </HotelsContainer>
      </SectionLayout>
    </HomeMain>
  );
};

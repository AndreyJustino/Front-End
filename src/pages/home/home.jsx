import styled from "styled-components";
import { HotelCard } from "../../components/Hotel/card/HotelCard";
import { useEffect, useState } from "react";
import { LoadMoreButton } from "../../components/Hotel/LoadMoreButton";
import { Carrousel } from "../../components/Hotel/carrousel/Carrousel";

const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-family: var(--font-family);
  padding: 20px 150px;

  & input {
    padding: 10px;
    margin-top: -10px;
  }

  @media (max-aspect-ratio: 1) {
    padding: 20px;
  }

  @media (max-width: 1366px) {
    padding: 20px;
  }
`;

const SectionLayout = styled.section`
  display: grid;

  grid-template-columns: 1fr 3fr;
  gap: 50px;

  @media (max-aspect-ratio: 1) {
  }

  @media (max-width: 1366px) {
    grid-template-columns: 1fr;
  }
`;

const HotelsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 70px;
  max-height: 100vh;

  overflow-y: scroll;
  scrollbar-width: none;

  @media (max-aspect-ratio: 1) {
    gap: 30px;
  }
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

const NUMBER_OF_HOTELS = 10;

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelsPage, setHotelsPage] = useState(1);
  const [hasMoreToLoad, setHasMoreToLoad] = useState(true);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const carrouselImages = hotels
    .slice(0, 5)
    .filter((hotel) => hotel.thumb)
    .map((hotel) => hotel.thumb);

  function loadMoreHotels() {
    setHotelsPage(hotelsPage + 1);
  }

  function refreshHotels() {
    setHotels([]);
    setHotelsPage(1);
    setHasMoreToLoad(true);
  }

  function changeCategory(e) {
    setCategory(e.target.value);
    refreshHotels();
  }

  function changeSearch(e) {
    setSearch(e.target.value);
    refreshHotels();
  }

  useEffect(() => {
    async function getHotels() {
      try {
        const response = await fetch(
          `http://localhost:3000/hotels?page=${hotelsPage}&limit=${NUMBER_OF_HOTELS}&category=${category}&search=${search}`
        );
        const htls = await response.json();

        console.log(htls);

        if (htls.length < NUMBER_OF_HOTELS) {
          //10 É UM NUMERO MAGICO
          //É O NUMERO DE HOTEIS QUE A API RETORNA POR VEZ
          setHasMoreToLoad(false);
        }

        hotels.push(...htls);
        setHotels([...hotels]);
      } catch (error) {
        console.log(error);
      }
    }
    getHotels();
  }, [hotelsPage, category, search]);

  return (
    <HomeMain>
      <Carrousel images={carrouselImages} />
      <label htmlFor="">Pesquisar Hotel:</label>
      <input
        onChange={changeSearch}
        type="text"
        placeholder="Glória Plaza Hotel"
      />
      <SectionLayout>
        <FilterContainer>
          <label htmlFor="select-filter">Filtrar Por</label>
          <select name="" id="select-filter" onChange={changeCategory}>
            <option value="all">Todos</option>
            <option value="hotel">Hotel</option>
            <option value="pousada">Pousada</option>
            <option value="hostel ou albergue">Hostel ou Albergue</option>
            <option value="resort">Resort</option>
            <option value="hotel fazenda">Hotel Fazenda</option>
            <option value="pousada">Pousada</option>
            <option value="flat/apart hotel">Flat/Apart hotel</option>
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

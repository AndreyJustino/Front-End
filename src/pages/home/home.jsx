import styled from "styled-components";
import { HotelCard } from "../../components/Hotel/card/HotelCard";
import { useEffect, useState, useCallback } from "react";
import { LoadMoreButton } from "../../components/Hotel/LoadMoreButton";
import { LoadingComponentInitial } from "../../components/Loading/Loading";
import { Carrousel } from "../../components/Hotel/carrousel/Carrousel";
import BasicSpeedDial from "../../components/I.A onfly/iaOnfly";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

const HomeMain = styled.main`
  display: flex;
  background-color: #F4F8FF;
  flex-direction: column;
  gap: 20px;
  font-family: var(--font-family);
  padding: 20px 150px;

  & hr {
    margin: 15px 0 0 0;
    border-top: #cad9f3;
  }

  & input {
    padding: 10px;
    margin-top: -10px;
  }

  @media (max-aspect-ratio: 1), (max-width: 1366px) {
    padding: 20px;
  }
`;

const SectionLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;

  @media (max-aspect-ratio: 1), (max-width: 1366px) {
    grid-template-columns: 1fr;
  }
`;

const HotelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  max-height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;

  @media (max-aspect-ratio: 1) {
    gap: 30px;
  }

  & p {
    font-size: 1.5rem;
    /* border: red solid; */
    font-weight: 600;
    color: #192A3D;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    font-size: 2rem;
    font-weight: 600;
  }

  & select {
    margin-bottom: auto;

    padding: 10px;
  }
`;

const Search = styled.label`
  font-size: 1.5rem;
  margin-top: 30px;
  font-weight: 600;
  color: #192A3D;
`

const HotelSearch = styled.input`
  padding: 10px;
  /* border: 1px solid var(--card-button-background); */
  border: none;
  width: 15vw;
  height: 50px;
  border-radius: 4px;
  font-size: 1.1rem;

  &:focus {
    outline: none;
    background-color: #b8deff;
    transition: 1s ease-in-out;
  }
`;

const CategorySelect = styled.select`
  padding: 10px;
  font-size: 1.1rem;
  /* border: 1px solid var(--card-button-background);
   */
  border: none;
  height: 50px;
  border-radius: 4px;

  & option {
    font-size: 1.2rem;
  }
`;

const NUMBER_OF_HOTELS = 10;

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [carrouselImages, setCarrouselImages] = useState([]);

  const fetchHotels = useCallback(async () => {
    try {
      const response = await fetch(
        `https://back-end-216p.onrender.com/hotels?page=${page}&limit=${NUMBER_OF_HOTELS}&category=${category}&search=${search}`
      );
      const data = await response.json();

      setHotels((prev) => [...prev, ...data]);
      if (data.length < NUMBER_OF_HOTELS) setHasMore(false);

      if (carrouselImages.length === 0) {
        const images = data
          .slice(0, 5)
          .filter((hotel) => hotel.thumb)
          .map((hotel) => hotel.thumb);
        setCarrouselImages(images);
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  }, [page, category, search]);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadMore = () => setPage((prev) => prev + 1);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    resetHotels();
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    resetHotels();
  };

  const resetHotels = () => {
    setHotels([]);
    setPage(1);
    setHasMore(true);
  };

  return (
    < >
    <Header/>
     <HomeMain>
      <LoadingComponentInitial isLoading={isLoading} />
      <Carrousel images={carrouselImages} />
      <hr />
      <Search htmlFor="hotel-search">Pesquisar Hotel:</Search>
      <HotelSearch
        id="hotel-search"
        onChange={handleSearchChange}
        type="text"
        placeholder="Glória Plaza Hotel"
      />
      <SectionLayout>
        <FilterContainer>
          <label htmlFor="select-filter">Filtrar Por</label>
          <CategorySelect id="select-filter" onChange={handleCategoryChange}>
            <option value="all">Todos</option>
            <option value="hotel">Hotel</option>
            <option value="pousada">Pousada</option>
            <option value="hostel ou albergue">Hostel ou Albergue</option>
            <option value="resort">Resort</option>
            <option value="hotel fazenda">Hotel Fazenda</option>
            <option value="flat/apart hotel">Flat/Apart Hotel</option>
          </CategorySelect>
        </FilterContainer>
        <HotelsContainer>
        <p>Resultados</p>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
          {hasMore && <LoadMoreButton onclick={handleLoadMore} />}
        </HotelsContainer>
      </SectionLayout>
    <BasicSpeedDial/>
      </HomeMain>
      <Footer/>
     </>
  
);
};

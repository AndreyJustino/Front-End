import styled from "styled-components";
import { HotelCard } from "../../components/Hotel/card/HotelCard";
import { useEffect, useState, useCallback } from "react";
import { LoadMoreButton } from "../../components/Hotel/LoadMoreButton";
import { LoadingComponentInitial } from "../../components/Loading/Loading";
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

const HotelSearch = styled.input`
  padding: 10px;
  border: 1px solid var(--card-button-background);
  border-radius: 5px;
`;

const CategorySelect = styled.select`
  padding: 10px;
  border: 1px solid var(--card-button-background);
  border-radius: 5px;
`;

const NUMBER_OF_HOTELS = 10;

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const carrouselImages = hotels
    .slice(0, 5)
    .filter((hotel) => hotel.thumb)
    .map((hotel) => hotel.thumb);

  const fetchHotels = useCallback(async () => {
    try {
      const response = await fetch(
        `https://back-end-216p.onrender.com/hotels?page=${page}&limit=${NUMBER_OF_HOTELS}&category=${category}&search=${search}`
      );
      const data = await response.json();

      setHotels((prev) => [...prev, ...data]);
      if (data.length < NUMBER_OF_HOTELS) setHasMore(false);
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
    <HomeMain>
      <LoadingComponentInitial isLoading={isLoading} />
      <Carrousel images={carrouselImages} />
      <label htmlFor="hotel-search">Pesquisar Hotel:</label>
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
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
          {hasMore && <LoadMoreButton onclick={handleLoadMore} />}
        </HotelsContainer>
      </SectionLayout>
    </HomeMain>
  );
};

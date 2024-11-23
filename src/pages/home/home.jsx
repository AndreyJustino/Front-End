import styled from "styled-components";
import { HotelCard } from "../../components/Hotel/card/HotelCard";

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

export const Home = () => {
  const hotels = [
    {
      id: 2,
      name: "Lua Nova Hotel",
      stars: 1,
      latitude: "-23.51464704884",
      longitude: "-46.6229242086411",
      description:
        "Situado a 250 m pela saída lateral do Terminal Rodoviário Tietê/Metro Portuguesa-Tietê,. A 5min.de carro do Anhembi Centro de exposições, 10min de caminhada do Expo Center Norte, 3min. de caminhada do Shopping Center Norte, O Aeroporto Internacional de Guarulhos fica a 22,7 km de distância aprox. 25/30min. de carro.\r\nOs quartos claros são decorados em tons agradáveis, todos os quartos do Hotel Lua Nova possuem TV e roupa de cama, banheiro privativo, Wifi e café da manhã gratuito.\r\n\r\n\r\n",
      address: "R. Cel. Antônio de Carvalho , 269",
      district: "Santana",
      city: "São Paulo",
      state: "SP",
      country: "BR",
      placeid: "ChIJ0WGkg4FEzpQRrlsz_whLqZs",
      thumb:
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg",
      images: [
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586015.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586016.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586017.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586018.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586019.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586021.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586022.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168029.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167991.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167992.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167993.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168030.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168031.jpeg.jpg",
      ],
      amenities: [
        { key: "WI_FI", label: "Internet" },
        { key: "BREAKFAST", label: "Café da manhã" },
        { key: "PARKING", label: "Estacionamento" },
      ],
      pois: [
        {
          lat: -23.515589999999975,
          long: -46.62459999999993,
          name: "Casa do Pão de Queijo",
          type: "Food",
          address: "Rua Eudoro Lemos, Santana, São Paulo, 02030-010",
          distance: 3,
        },
        {
          lat: -23.51572999999996,
          long: -46.62459999999993,
          name: "Cia da Empada",
          type: "Food",
          address: "Rua Eudoro Lemos, Santana, São Paulo, 02030-010",
          distance: 3.15,
        },
        {
          lat: -23.51333999999997,
          long: -46.62493999999998,
          name: "Spoleto",
          type: "Food",
          address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
          distance: 3.75,
        },
        {
          lat: -23.513109999999983,
          long: -46.62492999999995,
          name: "Restaurante Picote",
          type: "Food",
          address:
            "Avenida Cruzeiro do Sul 2046, Santana, São Paulo, 02030-000",
          distance: 4.05,
        },
        {
          lat: -23.516089999999963,
          long: -46.62501999999995,
          name: "Café Donuts-Rodoviária Tietê",
          type: "Food",
          address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
          distance: 4.05,
        },
        {
          lat: -23.516529999999932,
          long: -46.62503999999995,
          name: "Metrô-Portuguesa-Tietê-Avenida Cruzeiro do Sul-Lado Par",
          type: "Metro",
          address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
          distance: 4.5,
        },
        {
          lat: -23.516339999999957,
          long: -46.62528999999995,
          name: "Metrô-Portuguesa-Tietê-Avenida Cruzeiro do Sul-Lado Ímpar",
          type: "Metro",
          address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02031-000",
          distance: 4.65,
        },
      ],
      reviews: [],
      createdat: "2023-01-10T02:24:51.000Z",
      updatedat: "2024-09-05T13:20:00.000Z",
      cnpj: null,
      category: null,
    },
    {
      id: 3,
      name: "Lua Nova Hotel",
      stars: 1,
      latitude: "-23.51464704884",
      longitude: "-46.6229242086411",
      description:
        "Situado a 250 m pela saída lateral do Terminal Rodoviário Tietê/Metro Portuguesa-Tietê,. A 5min.de carro do Anhembi Centro de exposições, 10min de caminhada do Expo Center Norte, 3min. de caminhada do Shopping Center Norte, O Aeroporto Internacional de Guarulhos fica a 22,7 km de distância aprox. 25/30min. de carro.\r\nOs quartos claros são decorados em tons agradáveis, todos os quartos do Hotel Lua Nova possuem TV e roupa de cama, banheiro privativo, Wifi e café da manhã gratuito.\r\n\r\n\r\n",
      address: "R. Cel. Antônio de Carvalho , 269",
      district: "Santana",
      city: "São Paulo",
      state: "SP",
      country: "BR",
      placeid: "ChIJ0WGkg4FEzpQRrlsz_whLqZs",
      thumb:
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg",
      images: [
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586015.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586016.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586017.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586018.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586019.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586021.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586022.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168029.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167991.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167992.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167993.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168030.jpeg.jpg",
        "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168031.jpeg.jpg",
      ],
      amenities: [
        { key: "WI_FI", label: "Internet" },
        { key: "BREAKFAST", label: "Café da manhã" },
        { key: "PARKING", label: "Estacionamento" },
      ],
      pois: [
        {
          lat: -23.515589999999975,
          long: -46.62459999999993,
          name: "Casa do Pão de Queijo",
          type: "Food",
          address: "Rua Eudoro Lemos, Santana, São Paulo, 02030-010",
          distance: 3,
        },
        {
          lat: -23.51572999999996,
          long: -46.62459999999993,
          name: "Cia da Empada",
          type: "Food",
          address: "Rua Eudoro Lemos, Santana, São Paulo, 02030-010",
          distance: 3.15,
        },
        {
          lat: -23.51333999999997,
          long: -46.62493999999998,
          name: "Spoleto",
          type: "Food",
          address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
          distance: 3.75,
        },
        {
          lat: -23.513109999999983,
          long: -46.62492999999995,
          name: "Restaurante Picote",
          type: "Food",
          address:
            "Avenida Cruzeiro do Sul 2046, Santana, São Paulo, 02030-000",
          distance: 4.05,
        },
        {
          lat: -23.516089999999963,
          long: -46.62501999999995,
          name: "Café Donuts-Rodoviária Tietê",
          type: "Food",
          address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
          distance: 4.05,
        },
        {
          lat: -23.516529999999932,
          long: -46.62503999999995,
          name: "Metrô-Portuguesa-Tietê-Avenida Cruzeiro do Sul-Lado Par",
          type: "Metro",
          address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
          distance: 4.5,
        },
        {
          lat: -23.516339999999957,
          long: -46.62528999999995,
          name: "Metrô-Portuguesa-Tietê-Avenida Cruzeiro do Sul-Lado Ímpar",
          type: "Metro",
          address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02031-000",
          distance: 4.65,
        },
      ],
      reviews: [],
      createdat: "2023-01-10T02:24:51.000Z",
      updatedat: "2024-09-05T13:20:00.000Z",
      cnpj: null,
      category: null,
    },
  ];

  return (
    <main>
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
    </main>
  );
};

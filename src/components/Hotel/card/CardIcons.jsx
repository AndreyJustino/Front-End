import styled from "styled-components";
import Images from "../../../assets/images";

// [
//   {
//     key: "WI_FI",
//     label: "Internet",
//   },
//   {
//     key: "RESTAURANT",
//     label: "Restaurante",
//   },
//   {
//     key: "ROOM_SERVICE",
//     label: "Serviço de quarto",
//   },
//   {
//     key: "MEETING_ROOM",
//     label: "Sala para Reuniões / Eventos",
//   },
//   {
//     key: "LAUNDRY",
//     label: "Lavanderia",
//   },
//   {
//     key: "POOL",
//     label: "Piscina",
//   },
// ];

const iconsDict = {
  WI_FI: Images.Wifi,
  BREAKFAST: Images.Coffee,
  PARKING: Images.Car,
  RESTAURANT: Images.Restaurant,
};

const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CardIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export function CardIcons({ icons }) {
  return (
    <IconsContainer>
      {icons.map((icon, index) => (
        <CardIcon key={index} src={iconsDict[icon.key]} />
      ))}
    </IconsContainer>
  );
}

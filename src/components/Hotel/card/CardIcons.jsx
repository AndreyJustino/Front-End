import styled from "styled-components";
import Images from "../../../assets/images/";

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
  ROOM_SERVICE: Images.RomService,
  MEETING_ROOM: Images.MeetingRoom,
  LAUNDRY: Images.Laundry,
  POOL: Images.Pool,
  FITNESS_CENTER: Images.FitnessCenter,
  AIR_CONDITIONING: Images.AirConditioning,
  MICROWAVE: Images.Microware,
  SAFE: Images.Safe,
  STEAM_ROOM: Images.SteamRoom,
  ALLOWS_ANIMALS: Images.Animals,
  BAR  : Images.Bar,

};

const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CardIcon = styled.img`
  width: 30px;
`;

export function CardIcons({ icons }) {
  return (
    <IconsContainer>
      {icons?.map((icon, index) => (
        <CardIcon key={index} src={iconsDict[icon.key]} />
      ))}
    </IconsContainer>
  );
}

export default iconsDict;

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import RecipeReviewCard from "./cardIaOnfly";

export default function BasicSpeedDial() {
  const [showCard, setShowCard] = React.useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    setShowCard((prevShowCard) => !prevShowCard);
  };

  return (
    <Box sx={{}}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
        icon={<SpeedDialIcon />}
        onClick={handleToggle}
      />
      {showCard && (
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{ position: "fixed", bottom: 100, right: 20 }}
        >
          <RecipeReviewCard />
        </Box>
      )}
    </Box>
  );
}

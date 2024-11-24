import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import RecipeReviewCard from './cardIaOnfly'; 

export default function BasicSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const [showCard, setShowCard] = React.useState(false);

  const handleButtonClick = () => {
    setOpen((prevOpen) => !prevOpen);
    if (!open) {
      setShowCard(true); 
    }
  };

  const handleCardClick = () => {
    setShowCard(false);
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 80, right: 100 }}
        icon={<SpeedDialIcon />}
        open={open}
        onClick={handleButtonClick}
      >
        {showCard && <RecipeReviewCard onClick={handleCardClick} />}
      </SpeedDial>
    </Box>
  );
}

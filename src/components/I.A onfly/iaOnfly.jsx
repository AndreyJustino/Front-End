import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import RecipeReviewCard from './cardIaOnfly'; 

export default function BasicSpeedDial() {
  const [showCard, setShowCard] = React.useState(false);

  const handleToggle = (e) => {
    e.stopPropagation(); 
    setShowCard((prevShowCard) => !prevShowCard);
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 800, right: -100 }}
        icon={<SpeedDialIcon />}
        onClick={handleToggle}
      />
      {showCard && (
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{ position: 'absolute', bottom: 900, right: -100 }}
        >
          <RecipeReviewCard />
        </Box>
      )}
    </Box>
  );  
}

import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import CardAux from '../Cards/CardAux';

const MyModal = ({playerOn, setPlayerOn, players, code, url}) => {
  
  const [open, setOpen] = useState(false);

  const handlePassTurn = () =>{
    if(playerOn === players.name){
      setPlayerOn(players.name2);
    }else{
      setPlayerOn(players.name);
    }
    handleClose();
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(url)

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Cards
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '300px',
            backgroundColor: 'white',
            outline: 'none',
            borderRadius: '8px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Typography variant="h5" component="h5" sx={{ display: 'flex', justifyContent: 'center', mt: 4, fontFamily: 'Arial', fontWeight: 'bold'}}>
            Player: {` ${playerOn}`}
          </Typography>
          <CardAux url={url}  code = {code}  edit = {false}/>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Button variant="contained" color="secondary" onClick={handlePassTurn}>
              Pass turn
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;

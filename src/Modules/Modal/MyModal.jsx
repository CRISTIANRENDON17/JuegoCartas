import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import CardAux from '../Cards/CardAux';

const MyModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <h2 id="simple-modal-title">Título del modal</h2>
          <CardAux url={"https://deckofcardsapi.com/static/img/6D.svg"} />
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cerrar modal
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;

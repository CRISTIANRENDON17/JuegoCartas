import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import UsersContext from '../../Context/UsersContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { players, setPlayers } = useContext(UsersContext);
    const navigate = useNavigate();
    const handleStart = () => {
      if (players.name === '' || players.name === undefined) {
          setPlayers((prevPlayers) => ({ ...prevPlayers, name: 'Player1' }));
        }
        if (players.name2 === '' || players.name2 === undefined ) {
          setPlayers((prevPlayers) => ({ ...prevPlayers, name2: 'Player2' }));
        }
        navigate('/Cards', { replace: true });
      };
    
      const handlePlayer1Change = (event) => {
        setPlayers((prevPlayers) => ({ ...prevPlayers, name: event.target.value }));
      };
    
      const handlePlayer2Change = (event) => {
        setPlayers((prevPlayers) => ({ ...prevPlayers, name2: event.target.value }));
      };

	return (
		<div>
			<Box
				component='form'
				sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
      >   
        <Typography variant="h3" component="h3" sx={{ display: 'flex', justifyContent: 'center'}}>
            CARD GAME
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px' }}>
            <TextField
              id="Player1"
              label="Player1"
              variant="outlined"
              value={players.name}
              onChange={handlePlayer1Change}
            />
            <TextField  
              id="Player2"
              label="Player2"
              variant="outlined"
              value={players.name2}
              onChange={handlePlayer2Change}
            />
        </Box>
        <Button variant="contained" onClick={handleStart} >
            Start
        </Button>
			</Box>
		</div>
	);
};

export default Login;
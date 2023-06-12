import { Typography } from '@mui/material';
import UsersContext from '../../Context/UsersContext';
import { useContext } from 'react';
const Winpage = () => {
    const { win } = useContext(UsersContext);
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h2" component="h2" sx={{ fontFamily: 'Arial' }}>
            Resultados!!
        </Typography>
        <Typography variant="h4" component="h4" sx={{ fontFamily: 'Arial' }}>
            Ganador: {' '+win.name}
        </Typography>
    </div>
  )
}

export default Winpage
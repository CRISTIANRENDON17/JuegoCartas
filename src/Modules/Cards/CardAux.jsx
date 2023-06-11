import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

// eslint-disable-next-line react/prop-types
const CardAux = ({url}) => {
  return (
    
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                image={url}
                alt="Card Image"
                />
            </CardActionArea>
        </Card>
  )
}

export default CardAux
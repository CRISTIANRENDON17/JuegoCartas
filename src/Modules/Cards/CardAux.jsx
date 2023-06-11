import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const CardAux = ({url}) => {
  return (
    
        <Card>
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
import { useContext } from "react";
import UsersContext from "../../Context/UsersContext";
import Grid from '@mui/material/Grid';
import CardAux from "./CardAux";
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

const Cards = () => {
    const { player1, player2, deckofcard, deckofcard2 } = useContext(UsersContext);
    console.log(player1);
    console.log(player2);

    const firstTenCards = deckofcard.slice(0, 10);
    const firstTenCards2 = deckofcard2.slice(0, 10);

  return (
    <Container maxWidth="xl">
         <Typography variant="h3" component="h3" sx={{ display: 'flex', justifyContent: 'center'}}>
            {player1}
        </Typography>
        <Grid container spacing={2} columns={20}>
            {firstTenCards.map((card, index) => (
                <Grid item xs={2} key={index}>
				    <CardAux url ={card.image}/>
                </Grid>
			))}
        </Grid>
        <br/>
        <Typography variant="h3" component="h3" sx={{ display: 'flex', justifyContent: 'center'}}>
            {player2}
        </Typography>
        <Grid container spacing={2} columns={20}>
            {firstTenCards2.map((card, index) => (
                <Grid item xs={2} key={index}>
				    <CardAux url ={card.image}/>
                </Grid>
			))}
        </Grid>
    </Container>
  )
}

export default Cards;
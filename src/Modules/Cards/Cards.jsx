import Grid from '@mui/material/Grid';
import CardAux from "./CardAux";
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import MyModal from "../Modal/MyModal";

const Cards = ( {players, deckofcard, deckofcard2, deckofcardUse, deckofcardUse2} ) => {
    
    console.log(players.name);
    console.log(players.name2);
    console.log(deckofcardUse);
    console.log(deckofcardUse2);


  return (
    <Container maxWidth="xl">
        <Typography variant="h3" component="h2" sx={{ display: 'flex', justifyContent: 'center', mt: 4, fontFamily: 'Arial', fontWeight: 'bold'}}>
            Triplet Triplet Fourth
        </Typography>
        <br></br>
         <Typography variant="h4" component="h4" sx={{ display: 'flex', justifyContent: 'center', mt: 2, fontFamily: 'Arial'}}>
            Player: {' '+players.name} 
        </Typography>
        <Grid container spacing={2} columns={20} sx={{ mt: 2 }}>
            {deckofcard
                .filter((card) => deckofcardUse.includes(card.code))
                .map((card, index) => (
                <Grid item xs={2} key={index}>
                    <CardAux url={card.image} />
                </Grid>
            ))}
        </Grid>
        <p></p>
        <Typography variant="h4" component="h4" sx={{ display: 'flex', justifyContent: 'center', mt: 2, fontFamily: 'Arial'}}>
            Player: {' '+players.name2}
        </Typography>
        <Grid container spacing={2} columns={20} sx={{ mt: 2 }}>
            {deckofcard2
                .filter((card) => deckofcardUse2.includes(card.code))
                .map((card, index) => (
                <Grid item xs={2} key={index}>
                    <CardAux url={card.image} />
                </Grid>
            ))}
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <MyModal/>
        </div>
        
    </Container>
  )
}

export default Cards;
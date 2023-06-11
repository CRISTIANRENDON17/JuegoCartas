import { useContext } from "react";
import UsersContext from "../../Context/UsersContext";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Cards = () => {
    const { player1, player2 } = useContext(UsersContext);
    console.log(player1);
    console.log(player2);
  return (
    <div>
        <Grid container spacing={2} columns={20}>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>xs=8</Item>
            </Grid>
        </Grid>
    </div>
  )
}

export default Cards
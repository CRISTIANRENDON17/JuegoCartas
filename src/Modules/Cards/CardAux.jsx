import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useContext, useState } from 'react';
import UsersContext from '../../Context/UsersContext';

const CardAux = ({url, code, edit, NewCode, NewUrl, playerOn, setPlayerOn, players}) => {

  const {deckofcardUse, deckofcardUse2, setDeckofcardUse, setDeckofcardUse2} = useContext(UsersContext);

  const [codeAux, setCodeAux] = useState(code);
  const [urlAux, setUrlAux] = useState(url);
  
  const UpdatePlayer = () =>{
    if(playerOn === players.name){
      const newArray = [...deckofcardUse];
      for(let i = 0; i < 10 ; i++){
        if(newArray[i] === codeAux){
          newArray[i] = NewCode;
        }
      }
      console.log('array 1: '+ newArray);
      setDeckofcardUse(newArray);
      setPlayerOn(players.name2);
    }else{
      const newArray2 = [...deckofcardUse2];
      for(let i = 0; i < 10 ; i++){
        if(newArray2[i] === codeAux){
          newArray2[i] = NewCode;
        }
      }
      console.log('array 2: '+ newArray2)
      setDeckofcardUse2(newArray2);
      setPlayerOn(players.name);
    }
  }

  const handleChange = () =>{
    console.log(code);
    if(edit === true){
      console.log("se edito")
      setCodeAux(NewCode);
      setUrlAux(NewUrl);
      UpdatePlayer();
    }else{
      console.log('No se edito')
    }
  }

  return (
    <Card>
        <CardActionArea>
            <CardMedia
            component="img"
            value = {codeAux}
            image={urlAux}
            alt="Card Image"
            onClick={handleChange}
            />
        </CardActionArea>
    </Card>
  )
}

export default CardAux
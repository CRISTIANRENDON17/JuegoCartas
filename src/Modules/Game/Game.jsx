import { useContext } from "react";
import UsersContext from "../../Context/UsersContext";
import Cards from "../Cards/Cards";

const Game = () => {

    const { players, deckofcard, deckofcard2, deckofcardUse, deckofcardUse2 } = useContext(UsersContext);
  return (
    <div>
        <Cards players = {players} deckofcard = {deckofcard} deckofcard2 = {deckofcard2} deckofcardUse = {deckofcardUse} deckofcardUse2 = {deckofcardUse2}/>
    </div>
  )
}

export default Game
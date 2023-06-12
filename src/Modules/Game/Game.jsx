import { useContext, useEffect, useState } from "react";
import UsersContext from "../../Context/UsersContext";
import Cards from "../Cards/Cards";

const Game = () => {
    const { players, deckofcard, deckofcard2, deckofcardUse, deckofcardUse2 } = useContext(UsersContext);

    const [playerOn, setPlayerOn] = useState(players.name);
    const [count, setCount] = useState({ count1: 9, count2: 9 });
    const [newCart,setNewCart] = useState({url:'',code:''});

    useEffect(() => {
        let arrayCards;
        let playerCount;
        let auxdeckofcardUse;
        if (playerOn === players.name) {
            arrayCards = deckofcard;
            playerCount = count.count1;
            auxdeckofcardUse = deckofcardUse;
        } else {
            arrayCards = deckofcard2;
            auxdeckofcardUse = deckofcardUse2;
            playerCount = count.count2;
        }

        console.log('Name: '+playerOn);
        console.log(arrayCards);
        console.log('codigos: '+auxdeckofcardUse);
        console.log(playerCount);

        if(playerCount < 52){
            playerCount++;
            console.log('code new: '+arrayCards[playerCount].code+'  pos: '+playerCount)
            setNewCart({url:arrayCards[playerCount].image,code:arrayCards[playerCount].code}); 
            if (playerOn === players.name) {
                setCount((countData) => ({ ...countData, count1:  playerCount}));
            } else {
                setCount((countData) => ({ ...countData, count2:  playerCount}))
            }
            
        }

       

    }, [playerOn]);

    return (
        <div>
            <Cards
                players={players}
                deckofcard={deckofcard}
                deckofcard2={deckofcard2}
                deckofcardUse={deckofcardUse}
                deckofcardUse2={deckofcardUse2}
                playerOn={playerOn}
                setPlayerOn={setPlayerOn}
                newCart = {newCart}
            />
        </div>
    )
}

export default Game;

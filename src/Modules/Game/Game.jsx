import { useContext, useEffect, useState } from "react";
import UsersContext from "../../Context/UsersContext";
import Cards from "../Cards/Cards";
import { useNavigate } from "react-router-dom";

const Game = () => {
    const { players, deckofcard, deckofcard2, deckofcardUse, deckofcardUse2, setWin } = useContext(UsersContext);
    const navigate = useNavigate();
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

        console.log('Name: '+ playerOn);
        console.log(arrayCards);
        console.log('codigos: '+auxdeckofcardUse);
        console.log(playerCount);

        if(playerCount < 51){
            playerCount++;
            console.log('code new: '+arrayCards[playerCount].code+'  pos: '+playerCount)
            setNewCart({url:arrayCards[playerCount].image,code:arrayCards[playerCount].code}); 
            if (playerOn === players.name) {
                setCount((countData) => ({ ...countData, count1:  playerCount}));
            } else {
                setCount((countData) => ({ ...countData, count2:  playerCount}))
            }
            
            // Ejemplo de uso
            //const codigos = ['6H', '0D', 'KS', '6S', '0H', 'KD', '6D', 'KH', '0S','6C'];

            //validarTernasCuarta(auxdeckofcardUse,playerOn);
            const primerosCaracteres = auxdeckofcardUse.map(codigo => codigo[0]);

            // Contar las ocurrencias de cada carácter
            const ocurrencias = primerosCaracteres.reduce((count, caracter) => {
                count[caracter] = (count[caracter] || 0) + 1;
                return count;
            }, {});

            // Buscar un carácter que se repite exactamente 4 veces
            let caracterRepetidoCuarta = null;
            for (const caracter in ocurrencias) {
                if (ocurrencias[caracter] === 4) {
                    caracterRepetidoCuarta = caracter;
                    break;
                }
            }
            
            if (caracterRepetidoCuarta) {
                console.log(`El carácter '${caracterRepetidoCuarta}' se repite 4 veces.`);

                // Filtrar los caracteres que se repiten exactamente 3 veces, excluyendo el carácter de la cuarta
                const caracteresRepetidos = Object.keys(ocurrencias).filter(caracter => caracter !== caracterRepetidoCuarta && ocurrencias[caracter] === 3);
                
                if (caracteresRepetidos.length === 2) {
                    console.log(`Los caracteres '${caracteresRepetidos[0]}' y '${caracteresRepetidos[1]}' se repiten 3 veces.`);
                    setWin({ win: true, name: playerOn });
                    navigate('/WinPage', { replace: true });
                } else if (caracteresRepetidos.length === 1) {
                    console.log(`El carácter '${caracteresRepetidos[0]}' se repite 3 veces.`);
                } else {
                    console.log('No se encontraron dos caracteres que se repitan 3 veces.');
                }
            } else {
                console.log('No se encontró ningún carácter que se repita 4 veces.');
            }
        }else{
            navigate('/WinPage', { replace: true });
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

import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {

	const [players, setPlayers] = useState({name:''},{name2:''});
	const [deckofcard, setDeckofcard] = useState(null);
	const [deckofcard2, setDeckofcard2] = useState(null);
	const [deckofcardUse, setDeckofcardUse] = useState(null);
	const [deckofcardUse2, setDeckofcardUse2] = useState(null);

	useEffect(() => {
		const query = async () => {
			const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=52`;
			const response = await axios(url);
			const cardsData = response.data.cards;
			const response2 = await axios(url);
			const cardsData2 = response2.data.cards;
			setDeckofcard(cardsData);
			setDeckofcard2(cardsData2);
			setTimeout(() => {
				const array = cardsData.slice(0, 10).map(card => card.code);
				const array2 = cardsData2.slice(0, 10).map(card => card.code);
				setDeckofcardUse(array);
				setDeckofcardUse2(array2);
			  }, 3000)
		};
		query();	
	},[]);

	const data = { players, setPlayers,  deckofcard, deckofcard2, deckofcardUse, deckofcardUse2, setDeckofcardUse, setDeckofcardUse2}
	console.log(deckofcard);
	console.log(deckofcard2);
	return (
		<UsersContext.Provider value={data}>{children}</UsersContext.Provider>
	);
};

export { UsersProvider };
export default UsersContext;
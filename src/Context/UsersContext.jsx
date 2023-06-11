import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {

	const [player1, setPlayer1] = useState('');
	const [player2, setPlayer2] = useState('');
	const [deckofcard, setDeckofcard] = useState(null);
	const [deckofcard2, setDeckofcard2] = useState(null);
	const [deckofcardDiscard, setDeckofcardDiscard] = useState(null);
	const [deckofcardDiscard2, setDeckofcardDiscard2] = useState(null);

	useEffect(() => {
		const query = async () => {
			const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=52`;
			const response = await axios(url);
			const cardsData = response.data.cards;
			setDeckofcard(cardsData);
		};
		const query2 = async () => {
			const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=52`;
			const response = await axios(url);
			const cardsData = response.data.cards;
			setDeckofcard2(cardsData);
		};
		query();
		query2();
	},[]);

	const data = { player1, setPlayer1, player2,  setPlayer2, deckofcard, deckofcard2, deckofcardDiscard, deckofcardDiscard2, setDeckofcardDiscard, setDeckofcardDiscard2 }
	console.log(deckofcard);
	console.log(deckofcard2);
	return (
		<UsersContext.Provider value={data}>{children}</UsersContext.Provider>
	);
};

export { UsersProvider };
export default UsersContext;
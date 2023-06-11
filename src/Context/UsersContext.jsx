import { createContext, useState } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {

	const [player1, setPlayer1] = useState('');
	const [player2, setPlayer2] = useState('');

	const data = { player1, setPlayer1, player2, setPlayer2 }

	return (
		<UsersContext.Provider value={data}>{children}</UsersContext.Provider>
	);
};

export { UsersProvider };
export default UsersContext;
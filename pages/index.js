import React from 'react';
import axios from 'axios';

function Home() {
	React.useEffect(() => {
		getProducts();
	}, []);

	async function getProducts() {
		const url = 'http://localhost:3000/api/products';
		const response = await axios.get(url);
		console.log(response.data);
	}
	return <React.Fragment>home</React.Fragment>;
}

export default Home;

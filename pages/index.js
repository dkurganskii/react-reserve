import React from 'react';
import axios from 'axios';

function Home(products) {
	console.log(products);
	// React.useEffect(() => {
	// 	getProducts();
	// }, []);

	// async function getProducts() {
	// 	const url = 'http://localhost:3000/api/products';
	// 	const response = await axios.get(url);
	// 	console.log(response.data);
	// }
	return <React.Fragment>home</React.Fragment>;
}

Home.getInitialProps = async () => {
	//fetch data on server
	const url = 'http://localhost:3000/api/products';
	const response = await axios.get(url);
	return { products: response.data };
	//return response data as an object
	return { hello: 'world' };
	//this object will be merged with existing props
};

export default Home;

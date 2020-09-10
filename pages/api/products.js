// import products from '../../static/products.json';
import Product from '../../models/Product';
import connectDB from '../../utils/connectDB';

connectDB();

export default async (req, res) => {
	const products = await Product.find();
	res.status(200).json(products);
};

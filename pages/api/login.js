import connectDB from '../../utils/connectDB';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDB();

export default async (req, res) => {
	const { email, password } = req.body;
	try {
		// 1) check to see if the user exists with the provided email
		const user = await User.findOne({ email }).select('+password');
		// 2) -- if not, return error
		if (!user) {
			return res.status(404).send('No user exists with that email');
		}
		// 3) check to see if users' passwords matches the one in the db
		const passwordsMatch = await bcrypt.compare(password, user.password);
		// 4) -- if so, generate a token
		if (passwordsMatch) {
			const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

			// 5) then send that token to the client
			res.status(200).json(token);
		} else {
			res.status(401).send('Passwords do not match');
		}
	} catch (error) {
		console.error(error);
		res.status(500).send('Error logging in user');
	}
};

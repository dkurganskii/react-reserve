// must restart server whenever you make changes in next.config
module.exports = {
	env: {
		MONGO_SRV:
			'mongodb+srv://ReedBarger:dimon1992@reactreserve.ul15u.mongodb.net/reactreserve?retryWrites=true&w=majority',
		JWT_SECRET: 'snbdsbdhdsndsdsdhsh',
		CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dsk44vpjt/image/upload',
		STRIPE_SECRET_KEY: '<insert-stripe-secret-key>'
	}
};

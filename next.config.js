// must restart server whenever you make changes in next.config
module.exports = {
	env: {
		MONGO_SRV:
			'mongodb+srv://ReedBarger:dimon1992@reactreserve.ul15u.mongodb.net/ReactReserve?retryWrites=true&w=majority',
		JWT_SECRET: '<insert-jwt-secret>',
		CLOUDINARY_URL: '<insert-cloudinary-url>',
		STRIPE_SECRET_KEY: '<insert-stripe-secret-key>'
	}
};

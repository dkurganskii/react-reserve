function catchErrors(error, displayError) {
	let errorMsg;
	if (error.response) {
		//The request was made and the server responded with a status code that is not in the range of 2XX
		errorMsg = error.response.data;
		console.error('Error Response', errorMsg);

		//For Cloudinary image uploads
		if (error.response.data.error) {
			errorMsg = error.response.data.error.message;
		}
	} else if (error.request) {
		errorMsg = error.request;
		//The request was made, but no response was received
		console.error('Error request', errorMsg);
	} else {
		//Something else happened in making the request that triggered error
		errorMsg = error.message;
		console.error('Error Message', errorMsg);
	}
	displayError(errorMsg);
}

export default catchErrors;

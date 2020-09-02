import { Header, Button } from 'semantic-ui-react';

function ProductAttributes({ description }) {
	return (
		<React.Fragment>
			<Header as="h3">About this product</Header>
			<p>{description}</p>
			<Button icon="trash alternate outline" color="red" content="Delete Product" />
		</React.Fragment>
	);
}

export default ProductAttributes;

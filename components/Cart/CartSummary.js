import { Button, Segment, Divider } from 'semantic-ui-react';

function CartSummary() {
	return (
		<React.Fragment>
			<Divider />
			<Segment clearing size="large">
				<strong>Sub total:</strong> $0.00
				<Button icon="cart" color="teal" floated="right" content="Checkout" />
			</Segment>
		</React.Fragment>
	);
}

export default CartSummary;

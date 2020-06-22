import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51GwtVkE5QCERdx38ULp7nB8ywiJu7le2jLuIPr4KNwtVsGROqQwAi9Jzuw40LsuaPd9N8xYltME4kttQmOLXVA5G008NniczZl';

    const onToken = token => {
            console.log(token);
            alert('Payment Successful');
        };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Shop Hynotoad'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishablekey}
        />

    );
};

export default StripeCheckoutButton;
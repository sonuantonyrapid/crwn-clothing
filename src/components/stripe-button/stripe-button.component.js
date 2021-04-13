import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price*100;
    const publishableKey = "pk_test_51IfQacSCKV5a6B7xKVuiUibGDPulAcOrW7iV1MJLPpLfiiLyq084t7iRy4FfSH6pmu8bT3BgHDmQD4qb2h5Sygfe00fgJ6ndlV";

    const OnPayment = (token) => {
        console.log(token);
        alert('Payment successful');
    }

    return <StripeCheckout 
        label="Pay Now"
        name="CRWN Clothing Ltd"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={OnPayment}
        stripeKey={publishableKey}
    />;

};

export default StripeCheckoutButton;
import React, { Component } from 'react'

class Button extends Component {

  componentDidMount() {
    this.stripe = window.Stripe('pk_test_JrzXSCBHT21whkB2gZLAEhmN00zHgJkpLZ');
  }

  render() {
    return (
      <form onSubmit={ev => {
        ev.preventDefault();
        this.stripe.redirectToCheckout({
          items: [{sku: this.props.id, quantity: 1}],
    
          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: 'http://localhost:8000/success',
          cancelUrl: 'http://localhost:8000/canceled',
        })
        .then(function (result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      }}>
        <button type="submit">Buy!</button>
      </form>
    )
  }
}

export default Button
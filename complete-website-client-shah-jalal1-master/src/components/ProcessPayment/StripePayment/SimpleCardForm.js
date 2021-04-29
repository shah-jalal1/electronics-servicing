import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';

const SimpleCardForm = (props) => {
  // console.log(props.services);
  const stripe = useStripe();
  const elements = useElements();
  const [stripePayment, setStripePayment] = useState([]);
  // console.log(stripePayment);
  const services = props.services;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  const submitData = () => {
    // const data = [...props.services, ...stripePayment];
    props.services.status = "pending";
    props.services.email = loggedInUser.email;
    props.services.eName = loggedInUser.name;
    // console.log(data);
    console.log(props.services);
    // let bookingData =  {services};
    // let bookingData = [ {payments: stripePayment}, {services: services}];
    let bookingData = props.services;
    console.log(bookingData);

    fetch('https://stormy-retreat-53136.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully');
                }
            })

    
    // fetch('https://stormy-retreat-53136.herokuapp.com/addBooking', {
    //   method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify(bookingData)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //       console.log(data);
    //       alert("Successfully Added Data");
    //   })
    //   .catch(error => {
    //       console.error(error)
    //   })
    

  }

  

  const handleSubmit = async (event) => {
    
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      setStripePayment(paymentMethod);
      submitData();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default SimpleCardForm;
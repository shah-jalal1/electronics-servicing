import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const StripePayment = (props) => {
    // console.log(props.services);
    const {services} = props.services;
    return (
        <Elements stripe={stripePromise}>
           <SimpleCardForm services={props.services}></SimpleCardForm>
        </Elements>
    );
};

export default StripePayment;
import { useHistory } from 'react-router-dom';

function ThankYou() {
    
    return (
        <div>
            <h1>Success! Feedback has been submitted.</h1>
            <h2>Thank You!</h2>
            <button onClick={ () => history.push('/')} >Checkout</button>
        </div>
    )
}

history.push('/thankyou');

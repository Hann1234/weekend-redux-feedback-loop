import { useHistory } from 'react-router-dom';

function ThankYou() {

    const history = useHistory();
    
    return (
        <div>
            <h1>Success! Feedback has been submitted.</h1>
            <h2>Thank You!</h2>
            <button onClick={ () => history.push('/')} >Checkout</button>
        </div>
    )
}

export default ThankYou;

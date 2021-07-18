import { useHistory } from 'react-router-dom';

function ThankYou() {

    const history = useHistory();
    
    return (
        <div>
            <h1>Success! Feedback has been submitted.</h1>
            <h2>Thank You!</h2>
            <button onClick={ () => history.push('/')} >Leave New Feedback</button>
        </div>
    )
}

// I am clearing the reducers in the review component because that is when the info is submitted
// the user can exit the application instead of clicking 'leave new feedback' so if we wait to clear it on the thank you page it wont clear the reducers...

export default ThankYou;

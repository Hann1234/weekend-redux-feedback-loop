import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Review() {

    const feedback = useSelector(store => store);
    const history = useHistory();

    const handleClick = () => {

        // Don't reload on form submit
        event.preventDefault();

        const feedbackPost = {
            feeling: store.feeling,
            understanding: store.understanding,
            support: store.support,
            comments: store.comments
        };

        axios.post("/feedback", feedbackPost)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log('Error submitting feedback', error);
            });

        // direct browser to next route
        history.push('/thankyou');

    };

return (
    <div>
        <h1>Review Your Feedback</h1>
        <h3>Feelings: {feedback.feeling}</h3>
        <h3>Understanding: {feedback.understanding}</h3>
        <h3>Support: {feedback.support}</h3>
        <h3>Comments: {feedback.comments}</h3>
        <button onClick={handleClick} >Submit</button>
    </div>
)
    
}

export default Review;
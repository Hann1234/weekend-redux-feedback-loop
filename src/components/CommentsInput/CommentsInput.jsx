import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CommentsInput() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        // Don't reload on form submit
        event.preventDefault();

       // Comments can be left empty, no alert or verification needed

        // Tell redux that we want to add new info
        dispatch({
            type: 'ADD_COMMENTS',
            // Pass in the information, that we're tracking in state
            payload: comments
        });

        // Clear the form field
        setComments('');

        // direct browser to next route
        history.push('/review');
   };

   return (
    <div>
        <h1>Any comments you want to leave?</h1>
        <form onSubmit={handleSubmit}>
        <input 
                type="text" 
                placeholder="Comments"
                value={comments}
                onChange={event => setComments(event.target.value)}
            />
            <button type="submit">Next</button>
        </form>
    </div>
   )
}

export default CommentsInput;
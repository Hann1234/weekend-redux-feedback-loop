import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function FeelingInput() {
    const [feeling, setFeeling] = useState();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {

        if (!feeling) {
            alert('Please pick a value.')
        }

        else {
        // Don't reload on form submit
        event.preventDefault();

        // Tell redux that we want to add new feeling info
        dispatch({
            type: 'ADD_FEELING',
            // Pass in the information, that we're tracking in state
            payload: feeling
        });

        // direct browser to next route
        history.push('/understanding');
        }
   };

   return (
    <div>
        <h1>How are you feeling today?</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="radio"
                id="1" 
                name="1_thru_5"
                value={feeling}
                onClick={() => setFeeling(1)}
                />
                <label htmlFor="1">1</label><br/>
            <input 
                type="radio"
                id="2" 
                name="1_thru_5"
                value={feeling}
                onClick={() => setFeeling(2)}
                />
                <label htmlFor="2">2</label><br/>
            <input 
                type="radio"
                id="3" 
                name="1_thru_5"
                value={feeling}
                onClick={() => setFeeling(3)}
                />
                <label htmlFor="3">3</label><br/>
            <input 
                type="radio"
                id="4" 
                name="1_thru_5"
                value={feeling}
                onClick={() => setFeeling(4)}
                />
                <label htmlFor="4">4</label><br/>
            <input 
                type="radio"
                id="5" 
                name="1_thru_5"
                value={feeling}
                onClick={() => setFeeling(5)}
                />
                <label htmlFor="5">5</label><br/>
            <button type="submit">Next</button>
        </form>
    </div>
   )
}

export default FeelingInput;
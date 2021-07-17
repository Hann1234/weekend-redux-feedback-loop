import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function FeelingInput() {
    const [feeling, setFeeling] = useState(3);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        // Don't reload on form submit
        event.preventDefault();

       // Radio Button 3 is pre-clicked for the user so no verification needed as an empty value is not possible

        // Tell redux that we want to add new feeling info
        dispatch({
            type: 'ADD_FEELING',
            // Pass in the customer information, that we're tracking in state
            payload: feeling
        });

        // Clear the form field
        setFeeling(3);

        // direct browser to next route
        history.push('/understanding');
   };

   return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="radio"
                id="1" 
                name="1_thru_5"
                value={feeling}
                onClick={event => setFeeling(1)}
                />
                <label htmlFor="1">1</label><br/>
            <input 
                type="radio"
                id="2" 
                name="1_thru_5"
                value={feeling}
                onClick={event => setFeeling(2)}
                />
                <label htmlFor="2">2</label><br/>
            <input 
                type="radio"
                id="3" 
                name="1_thru_5"
                checked="checked"
                value={feeling}
                onClick={event => setFeeling(3)}
                />
                <label htmlFor="3">3</label><br/>
            <input 
                type="radio"
                id="4" 
                name="1_thru_5"
                value={feeling}
                onClick={event => setFeeling(4)}
                />
                <label htmlFor="4">4</label><br/>
            <input 
                type="radio"
                id="5" 
                name="1_thru_5"
                value={feeling}
                onClick={event => setFeeling(5)}
                />
                <label htmlFor="5">5</label><br/>
            <button type="submit">Next</button>
        </form>
    </div>
   )
}

export default FeelingInput;
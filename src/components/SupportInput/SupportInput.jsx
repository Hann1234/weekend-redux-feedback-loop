import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SupportInput() {
    const [support, setSupport] = useState(3);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        // Don't reload on form submit
        event.preventDefault();

       // Radio Button 3 is pre-clicked for the user so no verification needed as an empty value is not possible

        // Tell redux that we want to add new info
        dispatch({
            type: 'ADD_SUPPORT',
            // Pass in the information, that we're tracking in state
            payload: support
        });

        // Clear the form field
        setSupport(3);

        // direct browser to next route
        history.push('/comments');
   };

   return (
    <div>
        <h1>How well are you being supported?</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="radio"
                id="1" 
                name="1_thru_5"
                value={support}
                onClick={event => setSupport(1)}
                />
                <label htmlFor="1">1</label><br/>
            <input 
                type="radio"
                id="2" 
                name="1_thru_5"
                value={support}
                onClick={event => setSupport(2)}
                />
                <label htmlFor="2">2</label><br/>
            <input 
                type="radio"
                id="3" 
                name="1_thru_5"
                checked="checked"
                value={support}
                onClick={event => setSupport(3)}
                />
                <label htmlFor="3">3</label><br/>
            <input 
                type="radio"
                id="4" 
                name="1_thru_5"
                value={support}
                onClick={event => setSupport(4)}
                />
                <label htmlFor="4">4</label><br/>
            <input 
                type="radio"
                id="5" 
                name="1_thru_5"
                value={support}
                onClick={event => setSupport(5)}
                />
                <label htmlFor="5">5</label><br/>
            <button type="submit">Next</button>
        </form>
    </div>
   )
}

export default SupportInput;
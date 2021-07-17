import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SupportInput() {
    const [support, setSupport] = useState();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {

        if (!support) {
            alert('Please pick a value.')
        }

        else {
        // Don't reload on form submit
        event.preventDefault();

        // Tell redux that we want to add new info
        dispatch({
            type: 'ADD_SUPPORT',
            // Pass in the information, that we're tracking in state
            payload: support
        });

        // direct browser to next route
        history.push('/comments');
        }
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
                onClick={() => setSupport(1)}
                />
                <label htmlFor="1">1</label><br/>
            <input 
                type="radio"
                id="2" 
                name="1_thru_5"
                value={support}
                onClick={() => setSupport(2)}
                />
                <label htmlFor="2">2</label><br/>
            <input 
                type="radio"
                id="3" 
                name="1_thru_5"
                value={support}
                onClick={() => setSupport(3)}
                />
                <label htmlFor="3">3</label><br/>
            <input 
                type="radio"
                id="4" 
                name="1_thru_5"
                value={support}
                onClick={() => setSupport(4)}
                />
                <label htmlFor="4">4</label><br/>
            <input 
                type="radio"
                id="5" 
                name="1_thru_5"
                value={support}
                onClick={() => setSupport(5)}
                />
                <label htmlFor="5">5</label><br/>
            <button type="submit">Next</button>
        </form>
    </div>
   )
}

export default SupportInput;
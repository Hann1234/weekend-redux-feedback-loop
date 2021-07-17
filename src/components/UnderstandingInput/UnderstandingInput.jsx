import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UnderstandingInput() {
    const [understanding, setUnderstanding] = useState();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {

        if (!understanding) {
            alert('Please pick a value.')
        }
        
        else {
        // Don't reload on form submit
        event.preventDefault();

        // Tell redux that we want to add new info
        dispatch({
            type: 'ADD_UNDERSTANDING',
            // Pass in the information, that we're tracking in state
            payload: understanding
        });

        // direct browser to next route
        history.push('/support');
        }
   };

   return (
    <div>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="radio"
                id="1" 
                name="1_thru_5"
                value={understanding}
                onClick={() => setUnderstanding(1)}
                />
                <label htmlFor="1">1</label><br/>
            <input 
                type="radio"
                id="2" 
                name="1_thru_5"
                value={understanding}
                onClick={() => setUnderstanding(2)}
                />
                <label htmlFor="2">2</label><br/>
            <input 
                type="radio"
                id="3" 
                name="1_thru_5"
                value={understanding}
                onClick={() => setUnderstanding(3)}
                />
                <label htmlFor="3">3</label><br/>
            <input 
                type="radio"
                id="4" 
                name="1_thru_5"
                value={understanding}
                onClick={() => setUnderstanding(4)}
                />
                <label htmlFor="4">4</label><br/>
            <input 
                type="radio"
                id="5" 
                name="1_thru_5"
                value={understanding}
                onClick={() => setUnderstanding(5)}
                />
                <label htmlFor="5">5</label><br/>
            <button type="submit">Next</button>
        </form>
    </div>
   )
}

export default UnderstandingInput;
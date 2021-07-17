import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

// Reducers:

const feeling = (state=[], action) => {
    if (action.type === 'ADD_FEELING'){
        return action.payload;
    }
    return state;
};

const understanding = (state=[], action) => {
    if (action.type === 'ADD_UNDERSTANDING'){
        return action.payload;
    }
    return state;
};

const support = (state=[], action) => {
    if (action.type === 'ADD_SUPPORT'){
        return action.payload;
    }
    return state;
};

const comments = (state=[], action) => {
    if (action.type === 'ADD_COMMENTS'){
        return action.payload;
    }
    return state;
};

let storeInstance= createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger)
);

// Provider added to ReactDOM
ReactDOM.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );

// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

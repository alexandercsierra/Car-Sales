import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {featureReducer} from './reducers/featureReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

const placeholder = (state={}, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(featureReducer);
// console.log(store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

/**
 * Created by sraut on 11/13/16.
 */

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';


//import container from '/Users/sraut/Projects/ReduxSimpleStarter/index';
//Create a new component
    //html into the javascript function is JSX code and which will be translated by webpack+babel


const createStoreWithMiddleware = applyMiddleware()(createStore);


// Take this component to show onto the browser(in the DOM)
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('.container'));

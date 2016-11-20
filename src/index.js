/**
 * Created by sraut on 11/13/16.
 */

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import App from './components/app';

//import container from '/Users/sraut/Projects/ReduxSimpleStarter/index';
//Create a new component
    //html into the javascript function is JSX code and which will be translated by webpack+babel

class App extends Component {
    render() {
        return(
            <div>
                <App />
            </div>
        );
    }
}


// Take this component to show onto the browser(in the DOM)
ReactDOM.render(<App />, document.querySelector('.containers'));


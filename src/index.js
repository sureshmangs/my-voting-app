import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import myApp from './reducers';
import Results from './components/results';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

let store = createStore(myApp);


function render(){
	ReactDOM.render(
		<div className="container">
		<App store={ store } />, 
		<hr />
		<Results store={store} />
		</div>,
		document.getElementById('root')
		);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();

store.subscribe(render);
render();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App';



import configureStore from './store';
 

/**
 * Creating a store and passing it to provider
 */
const initState={};
const store=configureStore(initState);

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
,document.getElementById('root'))


/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

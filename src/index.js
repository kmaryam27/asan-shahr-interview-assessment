import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


const store = applyMiddleware(thunk)(createStore);



ReactDOM.render(

  <Provider store={store(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();


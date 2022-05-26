import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from "redux";
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// fontawesome icons
import './node_modules/@fortawesome/fontawesome-free/css/all.css';

import './node_modules/bootstrap/dist/css/bootstrap.css';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';

const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>  
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
); 

reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware  } from 'redux';//compose
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import createSagaMiddleware from 'redux-saga'
import  {InitialSaga} from './store/sagas'
import {watchMovies} from './store/index'

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(InitialSaga)
sagaMiddleware.run(watchMovies)
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 

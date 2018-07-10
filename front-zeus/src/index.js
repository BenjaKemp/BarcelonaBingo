import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux";
import rootReducer from "./reducers/index"
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localSto
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)
console.log(store)
ReactDOM.render(<Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                      <App />
                    </PersistGate>
                  </Provider>, document.getElementById('root'));
registerServiceWorker();

export default store;

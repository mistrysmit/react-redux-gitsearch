import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import storeFactory from './Component/Store'
import { setData} from './Component/Store/action'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    {}

const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
    console.log("Hey it's me "+store.getState());

    store.dispatch(
        setData({
            test:'test'
        })
    )

    
;}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

window.addEventListener("error", handleError)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

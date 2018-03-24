import C from './Constant'
import appReducer from './reducer'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
    let result
    console.groupCollapsed(`dispatching action => ${action.type}`)
    result = next(action)
    console.log(`${store.getState()}`)
    console.groupEnd()
    return result
}

export default (initialState = {}) => {
    return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
}




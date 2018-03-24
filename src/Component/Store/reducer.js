import C from './Constant'
import { combineReducers } from 'redux'


export const searchText=(state,action)=>{
    if (action.type === C.CHANGE_SEARCHTEXT)
    {
        return action.payload;
    }
    else{
        return '';
    }
} 
    
export const menuChange = (state, action)=>{
    if (action.type === C.CHANGE_MENU) {
        return action.payload;
    }
    else {
        return '';
    }
} 

export const searchData = (state,action)=>{
    if (action.type === C.SET_SEARCHDATA) {
        return action.payload;
    }
    else {
        return '';
    }
} 


export default combineReducers({
    searchText,
    menuChange,
    searchData
})






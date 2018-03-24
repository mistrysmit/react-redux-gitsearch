import C from './Constant'
 
export const chageSearchText = (value = 'papa') => ({type: C.CHANGE_SEARCHTEXT, payload: value } )

export const chageMenu = (value = 'users') => ({  type : C.CHANGE_MENU, payload : value  } )

export const setData=(value=[])=>({  type: C.SET_SEARCHDATA,  payload : value})
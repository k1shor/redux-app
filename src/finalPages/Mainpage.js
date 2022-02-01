import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import finalRootReducer from '../newReducers/finalRootReducer';
import Items from './Items';
import Cart from './Cart';
export const store = createStore(finalRootReducer)
const Mainpage = () => {
  
  return (<>
    
      
    <Items/>
    {/* <Cart/> */}
      
    
  </>);
};

export default Mainpage;

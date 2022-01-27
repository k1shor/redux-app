import React from 'react';
// import { useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartreducer from '../reducer/cartreducer';
import { Provider } from 'react-redux';
import DisplayStore from './DisplayStore';
import UpdateStore from './UpdateStore';
import gamereducer from '../reducer/gamereducer';
import DisplayGame from './DisplayGame';
import UpdateGame from './UpdateGame';
import rootreducer from '../reducer/rootreducer';



const Main = () => {
    // const ourStore = createStore(cartreducer)
    // const gameStore = createStore(gamereducer)

    const finalStore = createStore(rootreducer)
    
    return (
        // <Provider store={ourStore}>
        //     <DisplayStore />
        //     <UpdateStore/>
        // </Provider>

        // <Provider store={gameStore}>
        //     <DisplayGame/>
        //     <UpdateGame/>
        // </Provider>

        <Provider store={finalStore}>
            <DisplayStore />
            <UpdateStore/>
            <DisplayGame/>
            <UpdateGame/>
        </Provider>
    );
};

export default Main;

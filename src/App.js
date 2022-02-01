import { createStore } from 'redux';
import './App.css';
import MyRoutes from './MyRoutes';
import finalRootReducer from './newReducers/finalRootReducer'
import { Provider } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';


function App() {
  const persistConfig = {
    key:'root',
    storage
  }

  const our_persistReducer = persistReducer(persistConfig,finalRootReducer)
  const my_store = createStore(our_persistReducer)
  const persist_store = persistStore(my_store)

  return (
   
        <Provider store={my_store}>
          <PersistGate persistor={persist_store}>

          <MyRoutes />
          </PersistGate>
        </Provider>
    
  );
}

export default App;

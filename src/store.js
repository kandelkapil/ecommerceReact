import { applyMiddleware, compose, combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productReducer } from './reducers/productReducer';
import { orderReducer } from './reducers/orderReducer';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productReducer,
        cart: cartReducer,
        order: orderReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))

)

export default store;
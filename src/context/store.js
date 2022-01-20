import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { TodoReducer } from "../reducer/TodoReducers";


const applicationReducers = combineReducers({
       Todo:TodoReducer
});

const initialState = {}

const middleware = [thunk];

export const store = createStore(
    applicationReducers,
    initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


import { combineReducers, createStore, applyMiddleware } from 'redux';
import appReducer from './reducer';
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

store.subscribe(() => localStorage.setItem('WeatherApp', JSON.stringify(store.getState().appReducer.favoriteCities)))

export default store

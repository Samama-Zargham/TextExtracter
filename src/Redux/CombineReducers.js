import { combineReducers } from 'redux';
import Myreducers from './reducers';

const rootReducer = combineReducers({
  users: Myreducers,
});
export default rootReducer;

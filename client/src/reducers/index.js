import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form: form // can be changed to just -- form
});

export default rootReducer;

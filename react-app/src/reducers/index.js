import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

// import reducer here

const rootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    // define reducer here
  });

  const rootReducerModified = (state, action) => appReducer(state, action)

  return rootReducerModified;
};

export default rootReducer;

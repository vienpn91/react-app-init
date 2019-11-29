import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

// import reducer here
import campaigns from './campaigns';

const rootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    campaigns,
  });

  const rootReducerModified = (state, action) => appReducer(state, action)

  return rootReducerModified;
};

export default rootReducer;

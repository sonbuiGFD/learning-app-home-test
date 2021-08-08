// import update from 'immutability-helper';

import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import home from 'pages/home/reducer';

const initialState = {
  ui: {},
  data: {},
};

const global = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  global,
  home,
  toastr: toastrReducer,
});

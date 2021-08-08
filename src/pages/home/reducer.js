import update from 'immutability-helper';

import { GET_REPO_ISSUES_ACTION, UPDATE_FILTER_ACTION, GET_REPO_ISSUE_DETAIL_ACTION } from './action';

const initialState = {
  ui: {
    loading: false,
  },
  filter: {
    state: 'open',
    page: 1,
    per_page: 10,
  },
  data: {
    selected: {},
    issues: [],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_REPO_ISSUES_ACTION.PENDING:
      return update(state, {
        ui: {
          loading: { $set: true },
        },
      });
    case GET_REPO_ISSUES_ACTION.SUCCESS:
      return update(state, {
        ui: {
          loading: { $set: false },
        },
        data: {
          issues: { $set: payload },
        },
      });
    case GET_REPO_ISSUES_ACTION.ERROR:
      return update(state, {
        ui: {
          loading: { $set: false },
        },
      });

    case GET_REPO_ISSUE_DETAIL_ACTION.PENDING:
      return update(state, {
        ui: {
          loading: { $set: true },
        },
      });
    case GET_REPO_ISSUE_DETAIL_ACTION.SUCCESS:
      return update(state, {
        ui: {
          loading: { $set: false },
        },
        data: {
          selected: { $set: payload },
        },
      });
    case GET_REPO_ISSUE_DETAIL_ACTION.ERROR:
      return update(state, {
        ui: {
          loading: { $set: false },
        },
      });

    case UPDATE_FILTER_ACTION:
      return update(state, {
        filter: {
          $merge: payload,
        },
      });
    default:
      return state;
  }
};

export default reducer;

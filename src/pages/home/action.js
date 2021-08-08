import { actionCreator, actionTryCatchCreator } from 'utils';
import { getRepoIssues, getRepoIssueDetail } from 'services';

export const GET_REPO_ISSUES_ACTION = actionCreator('GET_REPO_ISSUES_ACTION');
export const getRepoIssueAction = (state = 'all') => async (dispatch) => {
  const onPending = () => {
    dispatch({
      type: GET_REPO_ISSUES_ACTION.PENDING,
    });
  };
  const onSuccess = (data) => {
    dispatch({
      type: GET_REPO_ISSUES_ACTION.SUCCESS,
      payload: data,
    });
  };
  const onError = (error) => {
    console.log('getRepoIssueAction -> error', JSON.stringify(error));
    dispatch({
      type: GET_REPO_ISSUES_ACTION.ERROR,
      payload: error,
    });
  };

  actionTryCatchCreator({
    service: getRepoIssues(state),
    onPending,
    onSuccess,
    onError,
  });
};

export const GET_REPO_ISSUE_DETAIL_ACTION = actionCreator('GET_REPO_ISSUE_DETAIL_ACTION');
export const getRepoIssueDetailAction = (number) => async (dispatch) => {
  const onPending = () => {
    dispatch({
      type: GET_REPO_ISSUE_DETAIL_ACTION.PENDING,
    });
  };
  const onSuccess = (data) => {
    dispatch({
      type: GET_REPO_ISSUE_DETAIL_ACTION.SUCCESS,
      payload: data,
    });
  };
  const onError = (error) => {
    console.log('getRepoIssueDetailAction -> error', JSON.stringify(error));
    dispatch({
      type: GET_REPO_ISSUE_DETAIL_ACTION.ERROR,
      payload: error,
    });
  };

  actionTryCatchCreator({
    service: getRepoIssueDetail(number),
    onPending,
    onSuccess,
    onError,
  });
};

export const UPDATE_FILTER_ACTION = 'UPDATE_FILTER_ACTION';
export const updateFilterAction = (payload) => (dispatch) => {
  dispatch({
    type: UPDATE_FILTER_ACTION,
    payload,
  });
};

// import { actionCreator, actionTryCatchCreator } from 'utils';
// import { getRepoIssues, getRepoIssueDetail } from 'services';

// export const GET_REPO_ISSUES_ACTION = actionCreator('GET_REPO_ISSUES_ACTION');
// export const getRepoIssueAction =
//   (state = 'all') =>
//   async (dispatch) => {
//     const onPending = () => {
//       dispatch({
//         type: GET_REPO_ISSUES_ACTION.PENDING,
//       });
//     };
//     const onSuccess = (data) => {
//       dispatch({
//         type: GET_REPO_ISSUES_ACTION.SUCCESS,
//         payload: data,
//       });
//     };
//     const onError = (error) => {
//       console.log('getRepoIssueAction -> error', JSON.stringify(error));
//       dispatch({
//         type: GET_REPO_ISSUES_ACTION.ERROR,
//         payload: error,
//       });
//     };

//     actionTryCatchCreator({
//       service: getRepoIssues(state),
//       onPending,
//       onSuccess,
//       onError,
//     });
//   };

export const UPDATE_INFO_ACTION = 'UPDATE_INFO_ACTION';
export const updateInfoAction = (payload) => (dispatch) => {
  dispatch({
    type: UPDATE_INFO_ACTION,
    payload,
  });
};

export const UPDATE_EDU_ACTION = 'UPDATE_EDU_ACTION';
export const updateEduAction = (payload) => (dispatch) => {
  dispatch({
    type: UPDATE_EDU_ACTION,
    payload,
  });
};

export const UPDATE_JOB_ACTION = 'UPDATE_JOB_ACTION';
export const updateJobAction = (payload) => (dispatch) => {
  dispatch({
    type: UPDATE_JOB_ACTION,
    payload,
  });
};

export const ADD_JOB_ACTION = 'ADD_JOB_ACTION';
export const addJobAction = (payload) => (dispatch) => {
  dispatch({
    type: ADD_JOB_ACTION,
    payload,
  });
};

export const ADD_EDU_ACTION = 'ADD_EDU_ACTION';
export const addEduAction = (payload) => (dispatch) => {
  dispatch({
    type: ADD_EDU_ACTION,
    payload,
  });
};

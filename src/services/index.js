import { request } from 'utils/request';
import { USER, REPO, HostAPIENV } from 'config';
import 'isomorphic-unfetch';

const GET_REPO_ISSUES = `/repos/${USER}/${REPO}/issues`;
// export const getRepoIssues = (params) =>
//   request({
//     url: GET_REPO_ISSUES,
//     method: 'GET',
//     params,
//   });

function getRepoIssues(state) {
  return new Promise((resolve, reject) =>
    fetch(`${HostAPIENV}${GET_REPO_ISSUES}?state=${state}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => resolve(data))
      .catch((errr) => reject(errr)),
  );
}

const GET_REPO_ISSUE_DETAIL = `/repos/${USER}/${REPO}/issues`;
// export const getRepoIssueDetail = (number) =>
//   request({
//     url: `${GET_REPO_ISSUE_DETAIL}/${number}`,
//     method: 'GET',
//   });

function getRepoIssueDetail(number) {
  return new Promise((resolve, reject) =>
    fetch(`${HostAPIENV}${GET_REPO_ISSUE_DETAIL}/${number}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => resolve(data))
      .catch((errr) => reject(errr)),
  );
}

export { getRepoIssues, getRepoIssueDetail };

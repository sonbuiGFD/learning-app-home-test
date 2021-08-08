import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRepoIssueAction } from 'pages/home/action';

import './style.scss';

const Home = ({ getRepoIssue }) => {
  return <>this is home test</>;
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  getRepoIssue: getRepoIssueAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

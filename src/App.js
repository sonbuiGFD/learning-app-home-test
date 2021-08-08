import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { connect } from 'react-redux';

import NotFound from 'pages/404';
import Home from 'pages/home';

const App = () => (
  <Router>
    <div className="app__main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <ReduxToastr
        timeOut={5000}
        preventDuplicates
        position="bottom-right"
        getState={(state) => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </div>
  </Router>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);

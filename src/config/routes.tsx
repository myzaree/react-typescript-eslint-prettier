import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

const Home = React.lazy(() => import('../pages/home/Home'));

export default (): React.ReactElement => (
  <Router history={customHistory}>
    <Switch>
      <Suspense fallback={<div />}>
        <Route exact path="/" component={Home} />
        {/* <Route component={NotFound} /> */}
      </Suspense>
    </Switch>
  </Router>
);

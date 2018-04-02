import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import NotFound from './routes/NotFound';
import { getNavData } from './common/nav';

// import IndexPage from './routes/IndexPage';
// import Home from './routes/Home';
// import StorePage from './routes/StorePage';

function RouterConfig({ history, app }) {
  let navs = getNavData(app)
  
  return (
    <Router history={history}>
      <Switch>
        {
          navs.map(item => {
            return <Route key={item.path} exact={item.path == '/'} path={item.path} component={item.component} />
          })
        }
        <Route path="/:path" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
// <Route path="/" exact component={StorePage} />
// <Route path="/index" component={IndexPage} />
// <Route path="/home" component={Home} />
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Home from '../../pages/Home';

const AppPresenter = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/todos'} exact={true} component={() => <div>todos</div>} />
        <Route path={'/todo/create'} exact={true} component={() => <div>create todo</div>} />
        <Route path={'/todo/:todoId/update'} component={() => <div>update todo</div>} />
        <Route path={'/todo/:todoId/delete'} component={() => <div>delete todo</div>} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;

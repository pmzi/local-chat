import { Switch, Route, Redirect } from 'react-router-dom';

import { CREATE_ROUTE, ENTER_ROUTE, JOIN_ROUTE } from '@shared/constants/router';
import Enter from './start/Enter';
import Join from './start/Join';
import Create from './start/Create';

export default function Router() {
  return (
    <Switch>
      <Route exact path={ENTER_ROUTE} component={Enter} />
      <Route exact path={JOIN_ROUTE} component={Join} />
      <Route exact path={CREATE_ROUTE} component={Create} />
      <Redirect to={ENTER_ROUTE} />
    </Switch>
  );
}

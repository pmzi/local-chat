import { Switch, Route, Redirect } from 'react-router-dom';

import { ENTER_ROUTE, JOIN_ROUTE } from '@shared/constants/router';
import Enter from './start/Enter';
import Join from './start/Join';

export default function Router() {
  return (
    <Switch>
      <Route exact path={ENTER_ROUTE} component={Enter} />
      <Route exact path={JOIN_ROUTE} component={Join} />
      <Redirect to={ENTER_ROUTE} />
    </Switch>
  );
}

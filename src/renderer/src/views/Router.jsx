import { Switch, Route, Redirect } from 'react-router-dom';

import { ENTER_ROUTE } from '@shared/constants/router';
import Enter from './Enter';

export default function Router() {
  return (
    <Switch>
      <Route exact path={ENTER_ROUTE} component={Enter} />
      <Redirect to={ENTER_ROUTE} />
    </Switch>
  );
}

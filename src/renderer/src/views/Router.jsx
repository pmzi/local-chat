import {
  Switch, Redirect, Route,
} from 'react-router-dom';

import { AUTH_ROUTE } from '@shared/constants/routes';
import Auth from './Auth';

export default function Router() {
  return (
    <Switch>
      <Route exact path={AUTH_ROUTE} component={Auth} />
      <Redirect to={AUTH_ROUTE} />
    </Switch>
  );
}

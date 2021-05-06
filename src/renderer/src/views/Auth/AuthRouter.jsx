import { CREATE_ROUTE, AUTH_ROUTE, JOIN_ROUTE } from '@shared/constants/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Create from './Create';
import Join from './Join';

export default function AuthRouter() {
  return (
    <Switch>
      <Route exact path={JOIN_ROUTE} component={Join} />
      <Route exact path={CREATE_ROUTE} component={Create} />
      <Redirect to={AUTH_ROUTE} />
    </Switch>
  );
}

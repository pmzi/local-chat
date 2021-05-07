import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import {
  AUTH_ROUTE, CHAT_GLOBAL_ROOM_ROUTE, JOIN_ROUTE, CREATE_ROUTE,
} from '@shared/constants/routes';
import ChatContainer from './ChatContainer';
import Enter from './auth/Enter';
import Join from './auth/Join';
import Create from './auth/Create';

export default function Router() {
  return (
    <Switch>
      <Route exact path={AUTH_ROUTE} component={Enter} />
      <Route exact path={JOIN_ROUTE} component={Join} />
      <Route exact path={CREATE_ROUTE} component={Create} />
      <Route path={CHAT_GLOBAL_ROOM_ROUTE} component={ChatContainer} />
      <Redirect to={AUTH_ROUTE} />
    </Switch>
  );
}

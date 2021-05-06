import {
  Switch, Redirect, Route,
} from 'react-router-dom';

import { AUTH_ROUTE, CHAT_GLOBAL_ROOM_ROUTE } from '@shared/constants/routes';
import Auth from './Auth';
import ChatRoom from './Chat';

export default function Router() {
  return (
    <Switch>
      <Route exact path={AUTH_ROUTE} component={Auth} />
      <Route exact path={CHAT_GLOBAL_ROOM_ROUTE} component={ChatRoom} />
      <Redirect to={CHAT_GLOBAL_ROOM_ROUTE} />
    </Switch>
  );
}

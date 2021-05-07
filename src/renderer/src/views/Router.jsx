import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import { AUTH_ROUTE, CHAT_GLOBAL_ROOM_ROUTE } from '@shared/constants/routes';
import Auth from './Auth';
import ChatRoom from './Chat';

export default function Router() {
  return (
    <Switch>
      <Route path={AUTH_ROUTE} component={Auth} />
      <Route path={CHAT_GLOBAL_ROOM_ROUTE} component={ChatRoom} />
      <Redirect to={CHAT_GLOBAL_ROOM_ROUTE} />
    </Switch>
  );
}

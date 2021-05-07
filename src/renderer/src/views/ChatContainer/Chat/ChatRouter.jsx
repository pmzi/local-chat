import { CHAT_GLOBAL_ROOM_ROUTE, CHAT_PRIVATE_MESSAGE_ROUTER_ROUTE } from '@shared/constants/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatRoom from './ChatRoom';

export default function ChatRouter() {
  return (
    <Switch>
      <Route path={CHAT_PRIVATE_MESSAGE_ROUTER_ROUTE} component={ChatRoom} />
      <Route exact path={CHAT_GLOBAL_ROOM_ROUTE} component={ChatRoom} />
      <Redirect to={CHAT_GLOBAL_ROOM_ROUTE} />
    </Switch>
  );
}

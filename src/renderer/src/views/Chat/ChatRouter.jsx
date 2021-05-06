import { CHAT_GLOBAL_ROOM_ROUTE, CHAT_PRIVATE_MESSAGE_ROUTER_ROUTE } from '@shared/constants/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPV from './ChatPV';

export default function ChatRouter() {
  return (
    <Switch>
      <Route exact path={CHAT_PRIVATE_MESSAGE_ROUTER_ROUTE} component={ChatPV} />
      <Route exact path={CHAT_GLOBAL_ROOM_ROUTE} component={ChatPV} />
      <Redirect to={CHAT_GLOBAL_ROOM_ROUTE} />
    </Switch>
  );
}

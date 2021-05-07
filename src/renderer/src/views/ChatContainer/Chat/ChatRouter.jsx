import { chatGlobalRoomRoute, chatPrivateMessageRoute } from '@shared/constants/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatRoom from './ChatRoom';

export default function ChatRouter() {
  return (
    <Switch>
      <Route path={chatPrivateMessageRoute.URL} component={ChatRoom} />
      <Route exact path={chatGlobalRoomRoute.URL} component={ChatRoom} />
      <Redirect to={chatGlobalRoomRoute.URL} />
    </Switch>
  );
}

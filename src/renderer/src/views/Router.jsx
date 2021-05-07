import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import {
  authRoute, chatGlobalRoomRoute, createRoute, joinRoute,
} from '@shared/constants/routes';
import ChatContainer from './ChatContainer';
import Enter from './auth/Enter';
import Join from './auth/Join';
import Create from './auth/Create';

export default function Router() {
  return (
    <Switch>
      <Route exact path={authRoute.URL} component={Enter} />
      <Route exact path={joinRoute.URL} component={Join} />
      <Route exact path={createRoute.URL} component={Create} />
      <Route path={chatGlobalRoomRoute.URL} component={ChatContainer} />
      <Redirect to={authRoute.URL} />
    </Switch>
  );
}

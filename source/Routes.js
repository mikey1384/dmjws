import React from 'react';
import Worlds from 'containers/Tabs/Worlds';
import Home from 'containers/Tabs/Home';
import {Route, IndexRoute} from 'react-router';
import App from 'containers/App';

export const routes = (
  <Route
    name="app"
    component={App}
    path="/"
  >
    <IndexRoute component={Home} />
    <Route path="/worlds" component={Worlds} />
  </Route>
)

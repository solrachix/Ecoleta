import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

export default function Routes(){
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-point" component={CreatePoint} />

        </Switch>
    </BrowserRouter>
  );
}
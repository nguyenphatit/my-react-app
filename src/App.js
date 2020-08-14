import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Counter from './containers/Counter';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/counter" exact component={Counter} />
    </Switch>
  );
}

export default App;

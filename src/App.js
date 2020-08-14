import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Counter from './containers/Counter';
import PostList from './containers/PostList';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-5xl text-pink-500 font-bold py-3 mb-5 bg-black">
        Welcome to my react app!
        <span role="img" aria-label="hello">✌</span>
        <span className="block text-xl text-pink-100 font-normal">Phat is learning the React.js</span>
      </h1>

      <main className="container mx-auto">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/counter" exact component={Counter} />
          <Route path="/posts" exact component={PostList} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;

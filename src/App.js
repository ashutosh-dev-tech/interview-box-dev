import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AllPages from './pages/allposts/AllPost';
import CurPost from './pages/curPost/CurPost';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true}>
          <AllPages />
      </Route>
      <Route path="/:postId">
        <CurPost />
      </Route>
    </Switch>
  );
}

export default App;

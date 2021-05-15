import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AllPages from './pages/allposts/AllPost';
import CurPost from './pages/curPost/CurPost';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
        <Switch>      
          <Route path="/" exact={true}>
              <AllPages />
          </Route>
          <Route path="/:postId">
            <CurPost />
          </Route>
        </Switch>
      <Footer />
    </>
  );
}

export default App;

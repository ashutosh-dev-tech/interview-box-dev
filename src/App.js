import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import AllPages from './pages/allposts/AllPost';
import CurPost from './pages/curPost/CurPost';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import allCards from './experiences/allExp.json';

function App() {
  const [allPosts, setAllPosts] = useState(allCards);

  const filterPosts = (search) => {
    search = search.toLocaleLowerCase();
    if(search==""){
      setAllPosts({
        expList: allCards.expList
      });
      return;
    }
    const newExpList = allCards.expList.filter((cur)=>{
      return cur.company.toLocaleLowerCase().includes(search) || cur.role.toLocaleLowerCase().includes(search) || cur.exprience.includes(search);
    });
    setAllPosts({
      expList: newExpList
    });

  }
  return (
    <>
      <Header filterPosts={filterPosts}/>
        <Switch>      
          <Route path="/" exact={true}>
              <AllPages allPosts={allPosts}/>
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

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Pages/Home';
import Header from './components/Header';
import {PostsContext} from './context/postsContext';
import {useEffect, useState} from 'react';
import {getFeeds} from './api/api';

const App = () => {
  const [posts, setPosts] = useState();
  useEffect(async () => {
    setPosts(await getFeeds());
  }, []);

  return (
    <PostsContext.Provider value={posts}>
      <BrowserRouter>
        <ScrollToTop/>
        <Header/>
        <Switch>

          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </PostsContext.Provider>
  );
};

export default App;

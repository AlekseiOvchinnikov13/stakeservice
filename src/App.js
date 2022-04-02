import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Pages/Home';
import {PostsContext} from './context/postsContext';
import {useEffect, useLayoutEffect, useState} from 'react';
import {getCoinsMarkets, getFeeds} from './api/api';
import {CoinsContext} from './context/CoinsContext';
import {PRODUCT_CARDS_ARRAY} from './data/home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [posts, setPosts] = useState();
  const [coinList, setCoinList] = useState([]);

  const [, setSize] = useState([0, 0]);
  const updateSize = () => setSize([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const getCoins = async () => {
    const data = await getCoinsMarkets();
    const arr = PRODUCT_CARDS_ARRAY.reduce((acc, item) => {
      const {
        id,
        name: coinName,
        current_price: price,
        image: img,
        symbol: coin
      }
        = data.filter(el => el.id === item.id)[0] || {};

      const result = {id, coinName, price, coin, img, ...item};
      return acc.concat(result);
    }, []);
    setCoinList(arr);
  };

  useEffect(async () => {
    setPosts(await getFeeds());
    await getCoins();
  }, []);

  return (
    <PostsContext.Provider value={posts}>
      <CoinsContext.Provider value={coinList}>
        <BrowserRouter>
          <ScrollToTop/>
          <Header/>
          <Switch>

            <Route path="/" component={Home}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CoinsContext.Provider>
    </PostsContext.Provider>
  );
};

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Pages/Home';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Switch>

        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

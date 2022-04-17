import axios from 'axios';

export const getFeeds = () => {
  //const nameMedium = 'stake-service';
  //const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${nameMedium}`;
  const urlAddition = 'https://api.rss2json.com/v1/api.json?rss_url=https://rss.app/feeds/58wFvJBIPryvOyHu.xml';
  return axios.get(urlAddition)
    .then(res => res.data.items)
    .catch(() => []);
};

export const getCoinsMarkets = ids => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.map(item => item)}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  return axios.get(url)
    .then(res => res.data)
    .catch(() => []);
};

export const getCoinInfo = coinId => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false`;

  return axios.get(url)
    .then(res => res.data)
    .catch(() => []);
};
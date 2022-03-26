import axios from 'axios';

const nameMedium = 'stake-service';

export const getFeeds = () => {
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${nameMedium}`;

  return axios.get(url)
    .then(res => res.data.items.reverse())
    .catch(() => []);
};

export const getCoinsMarkets = () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana%2Cthe-graph%2Ccelo%2Coasis-network%2Cagoric%2Cregen%2Csentinel%2Ccentrifuge%2Cdock&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  return axios.get(url)
    .then(res => res.data)
    .catch(() => []);
};
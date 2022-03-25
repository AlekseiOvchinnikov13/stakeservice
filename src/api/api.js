import axios from 'axios';

const nameMedium = 'stake-service';

export const getFeeds = () => {
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${nameMedium}`;

  return axios.get(url)
    .then(res => res.data.items.reverse())
    .catch(() => []);
};
import axios from 'axios';

//const token = '226ffd50ac1871ece54861e6302fadebdbe240117211fbf4476e3abbe7eaea313';
//const userId = '14d67923b7308de0e2a7f8774543ed9f4f8fd427773af3688e4c8b9618b05ad17';
const nameMedium = 'stake-service';

export const getPublication = () => {
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${nameMedium}`;

  return axios.get(url)
    .then(res => res.data.items.reverse())
    .catch(() => []);
};
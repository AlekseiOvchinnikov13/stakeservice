import {useContext} from 'react';
import {PostsContext} from '../context/postsContext';

const MobileWidth = '950';

/**
 * Delete html tags from text
 * @param text {String} text
 * @returns {*}
 */
export const cleanText = text => {
  const regexp = /(?:<).*?(?:>)/g;
  return text.replace(regexp, '');
};

/**
 * Format dateTime to date (dd.MM.yyyy)
 * @param date
 * @returns {string}
 */
export const dateTimeToDateFormat = (date) => {
  let tmpDate = date.slice(0, date.indexOf(' '));
  tmpDate = tmpDate.split('-').reverse().join('.');
  return tmpDate;
};

/**
 * Get APY profit by coin name
 */
export const getProfitByCoin = (coin, list) =>
  list.filter(el => el.coin === coin)[0].percentNumber / 100;

/**
 * Check for mobile screens width
 * @returns {boolean}
 */
export const isMobile = () =>
  window.innerWidth <= MobileWidth;

/**
 * Сокращает массив до num количества элементов
 * @param num Возвращаемая длина массива
 * @param array Массив
 * @returns {*}
 */
export const sliceArrayByCount = (num, array) =>
  array.slice(0, num - array.length);

/**
 * Get all exist posts categories
 * @returns {any[]}
 */
export const getAllCategories = () => {
  const posts = useContext(PostsContext);
  const cats = posts && posts.reduce((acc, post) =>
    acc.concat(post?.categories)
  , []);

  return Array.from(new Set(cats));
};

/**
 * Получить только главные метрики по криптовалюте
 * @param data Все метрики по криптовалюте
 * @returns {{'coingecko rank': *, 'market_cap rank': *, 'coingecko score': *, 'liquidity score': *, ath: (boolean|*), 'current price': (boolean|*), atl: (boolean|*), 'community score': *, 'developer score': *, 'total supply': *, homepage: *}}
 * @param {*} data
 */
export const getMainDataByCoinInfo = (data) => {
  return {
    'market cap rank': data.market_cap_rank,
    'coingecko score': data.coingecko_score,
    'community score': data.community_score,
    'developer score': data.developer_score,
    'liquidity score': data.liquidity_score,
    'alexa rank': data.public_interest_stats?.alexa_rank,
    'homepage': data.links?.homepage?.filter(link => link.length > 0)[0],
    'ath': data.market_data?.ath?.usd,
    'atl': data.market_data?.atl?.usd,
    'current price': data.market_data?.current_price?.usd,
    'total supply': data.market_data?.total_supply,
  };
};
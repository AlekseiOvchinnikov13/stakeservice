import {format} from 'date-fns';

const DATE_FORMAT = 'dd.MM.yyyy';
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
export const dateTimeToDateFormat = (date) =>
  format(new Date(date), DATE_FORMAT);

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
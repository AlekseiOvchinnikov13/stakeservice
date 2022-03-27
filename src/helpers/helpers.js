import {format} from 'date-fns';

const DATE_FORMAT = 'dd.MM.yyyy';

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
 * Get APY percent by coin name
 */
export const getPercentByCoin = (coin, list) =>
  list.filter(el => el.coin === coin)[0].percentNumber;
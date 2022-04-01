import './style.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {CALCULATOR_DOLLAR_SYMBOL} from '../../../data/calculator';
import {useContext} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import {getProfitByCoin} from '../../../helpers/helpers';

const EarningCard = ({
  isCryptoActive,
  cryptoValue,
  usdValue,
  coin,
  data: {
    period,
    count
  }
}) => {
  const coins = useContext(CoinsContext);

  const cryptoTextClasses = classNames(
    'earning-card__profit-crypto',
    {'earning-card__active-text': !isCryptoActive},
    {'earning-card__text': isCryptoActive}
  );

  const usdTextClasses = classNames(
    'earning-card__profit-usd',
    {'earning-card__active-text': isCryptoActive},
    {'earning-card__text': !isCryptoActive}
  );

  return (
    <div className="earning-card">
      <span className={usdTextClasses}>
        {`${CALCULATOR_DOLLAR_SYMBOL} ${(usdValue * count * getProfitByCoin(coin, coins)).toFixed(4)}`}
      </span>
      <span className={cryptoTextClasses}>
        {`${coin.toUpperCase()} ${(cryptoValue * count * getProfitByCoin(coin, coins)).toFixed(4)}`}
      </span>
      <span className="earning-card__profit-period">
        {period}
      </span>
    </div>
  );
};

EarningCard.propTypes = {
  isCryptoActive: PropTypes.bool,
  data: PropTypes.object,
  cryptoValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  usdValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  coin: PropTypes.string
};

export default EarningCard;
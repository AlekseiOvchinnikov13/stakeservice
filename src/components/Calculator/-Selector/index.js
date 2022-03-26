import PropTypes from 'prop-types';
import {useContext} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import './style.scss';

const Selector = ({
  coinName,
  onClickSelectCurrency
}) => {
  const coins = useContext(CoinsContext);

  return (
    <>
      {coins && coins.filter(el => el.coinName !== coinName && el.price).map(currency =>
        <button
          key={currency.coin}
          onClick={() => onClickSelectCurrency(currency)}
        >
          {`${currency.coinName} (${currency.coin.toUpperCase()})`}
        </button>
      )}
    </>
  );
};

Selector.propTypes = {
  coinName: PropTypes.string,
  onClickSelectCurrency: PropTypes.func
};

export default Selector;
import PropTypes from 'prop-types';
import {PRODUCT_CARDS_ARRAY} from '../../../data/home';
import './style.scss';

const Selector = ({
  coinName,
  onClickSelectCurrency
}) => {
  return (
    <>
      {PRODUCT_CARDS_ARRAY.filter(el => el.coinName !== coinName).map(currency =>
        <button
          key={currency.label}
          onClick={() => onClickSelectCurrency(currency)}
        >
          {`${currency.coinName} (${currency.coin})`}
        </button>
      )}
    </>
  );
};

Selector.propTypes = {
  coinName: PropTypes.string.isRequired,
  onClickSelectCurrency: PropTypes.func.isRequired
};

export default Selector;
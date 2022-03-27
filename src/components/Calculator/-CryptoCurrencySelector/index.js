import ArrowDown from '../-ArrowDown';
import Scrollbar from 'react-scrollbars-custom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Selector from '../-Selector';
import './style.scss';

const CryptoCurrencySelector = ({
  isOpenSelect,
  onClickArrowSelect,
  onClickSelectCurrency,
  selectedCurrency: {
    coinName,
    coin
  },
  isCryptoActive
}) => {

  const cryptoCurrencyClasses = classNames(
    'crypto-currency',
    {'crypto-currency-active': isCryptoActive},
    {'crypto-currency-open-selector': isOpenSelect}
  );

  const cryptoCurrencyNameClasses = classNames(
    'currency-name',
    {'currency-name-active': isCryptoActive}
  );

  const selectWrapperClasses = classNames(
    'select-currency-wrapper',
    {'select-currency-wrapper-open': isOpenSelect}
  );

  const scrollBarStyles = {
    height: '100%',
    width: '100%'
  };

  return (
    <div className={cryptoCurrencyClasses}>
      <button
        className="button-selector-currency"
        onClick={onClickArrowSelect}
      >
        <span className={cryptoCurrencyNameClasses}>
          {`${coinName} (${coin.toUpperCase()})`}
        </span>
        <span className="arrow-down">
          <ArrowDown/>
        </span>
      </button>
      <div className={selectWrapperClasses}>
        <Scrollbar style={scrollBarStyles}>
          <Selector
            coinName={coinName}
            onClickSelectCurrency={onClickSelectCurrency}/>
        </Scrollbar>
      </div>
    </div>
  );
};

CryptoCurrencySelector.propTypes = {
  isOpenSelect: PropTypes.bool,
  onClickArrowSelect: PropTypes.func,
  onClickSelectCurrency: PropTypes.func,
  selectedCurrency: PropTypes.object,
  isCryptoActive: PropTypes.bool
};

export default CryptoCurrencySelector;
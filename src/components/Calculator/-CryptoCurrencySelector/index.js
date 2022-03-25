import ArrowDown from '../-ArrowDown';
import Scrollbar from 'react-scrollbars-custom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';
import Selector from '../-Selector';

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
    {'crypto-currency-active': isCryptoActive}
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
      <span className={cryptoCurrencyNameClasses}>
        {`${coinName} (${coin})`}
      </span>
      <button
        className="arrow-down"
        onClick={onClickArrowSelect}
      >
        <ArrowDown/>
      </button>
      {isOpenSelect &&
        <div className={selectWrapperClasses}>
          <Scrollbar style={scrollBarStyles}>
            <Selector
              coinName={coinName}
              onClickSelectCurrency={onClickSelectCurrency}/>
          </Scrollbar>
        </div>}
    </div>
  );
};

CryptoCurrencySelector.propTypes = {
  isOpenSelect: PropTypes.bool.isRequired,
  onClickArrowSelect: PropTypes.func.isRequired,
  onClickSelectCurrency: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.object.isRequired,
  isCryptoActive: PropTypes.bool.isRequired
};

export default CryptoCurrencySelector;
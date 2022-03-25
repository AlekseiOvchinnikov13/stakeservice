import {CALCULATOR_DOLLAR_SYMBOL, CALCULATOR_DOLLAR_TEXT} from '../../../data/calculator';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '../-ToggleButton';
import CryptoCurrencySelector from '../-CryptoCurrencySelector';
import './style.scss';

const CurrencySelector = ({
  selectedCurrency,
  setSelectedCurrency,
  activeCurrency: {
    crypto,
    usd
  },
  setActiveCurrency
}) => {

  const [isSpin, setIsSpin] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const [usdCurrencyNameClasses, setUsdCurrencyNameClasses] = useState('');
  const [colorBlockClasses, setColorBlockClasses] = useState('');

  useEffect(() => {
    setColorBlockClasses(`color-block ${usd ? 'color-block-down' : 'color-block-up'}${isOpenSelect ? ' color-block-without-border-radius' : ''}`);
    setUsdCurrencyNameClasses(`currency-name usd-currency-name${usd ? ' currency-name-active' : ''}`);
  }, [usd, isOpenSelect]);

  const onClickSelectCurrency = obj => {
    setSelectedCurrency(obj);
    onClickArrowSelect();
  };

  const onClickArrowSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const onToggleHandler = () => {
    setActiveCurrency({crypto: !crypto, usd: !usd});
    setIsSpin(true);
  };

  return (
    <div className="currency-block">
      <div className={colorBlockClasses}/>
      <CryptoCurrencySelector
        isOpenSelect={isOpenSelect}
        onClickArrowSelect={onClickArrowSelect}
        onClickSelectCurrency={onClickSelectCurrency}
        selectedCurrency={selectedCurrency}
        isCryptoActive={crypto}
        isUsdActive={usd}
      />
      <ToggleButton
        isSpin={isSpin}
        isOpenSelect={isOpenSelect}
        onToggleHandler={onToggleHandler}
        onAnimationEnd={() => setIsSpin(false)}
        isCryptoActive={crypto}
        isUsdActive={usd}
      />
      <div className={usdCurrencyNameClasses}>
        {`${CALCULATOR_DOLLAR_TEXT} (${CALCULATOR_DOLLAR_SYMBOL})`}
      </div>
    </div>
  );
};

CurrencySelector.propTypes = {
  selectedCurrency: PropTypes.object.isRequired,
  setSelectedCurrency: PropTypes.func.isRequired,
  activeCurrency: PropTypes.object.isRequired,
  setActiveCurrency: PropTypes.func.isRequired
};

export default CurrencySelector;
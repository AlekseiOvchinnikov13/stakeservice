import './style/style.scss';
import ToggleArrow from './images/toggle-arrow.svg';
import {useEffect, useState} from 'react';
import {CALCULATOR_DOLLAR_SYMBOL, CALCULATOR_DOLLAR_TEXT} from '../../data/calculator';
import ArrowDown from './-ArrowDown';
import {PRODUCT_CARDS_ARRAY} from '../../data/home';
import Scrollbar from 'react-scrollbars-custom';

const Calculator = () => {
  const [cryptoCurrencyNameClasses, setCryptoCurrencyNameClasses] = useState('');
  const [usdCurrencyNameClasses, setUsdCurrencyNameClasses] = useState('');
  const [colorBlockClasses, setColorBlockClasses] = useState('');
  const [cryptoCurrencyClasses, setCryptoCurrencyClasses] = useState('');
  const [toggleClasses, setToggleClasses] = useState('');
  const [selectWrapperClasses, setSelectWrapperClasses] = useState('');

  const [activeCurrency, setActiveCurrency] = useState({crypto: true, usd: false});
  const [isSpin, setIsSpin] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(PRODUCT_CARDS_ARRAY[0]);

  useEffect(() => {
    setColorBlockClasses(`color-block ${activeCurrency.usd ? 'color-block-down' : 'color-block-up'}${isOpenSelect ? ' color-block-without-border-radius' : ''}`);
    setCryptoCurrencyNameClasses(`currency-name crypto-currency-name${activeCurrency.crypto ? ' currency-name-active' : ''}`);
    setUsdCurrencyNameClasses(`currency-name usd-currency-name${activeCurrency.usd ? ' currency-name-active' : ''}`);
    setCryptoCurrencyClasses(`crypto-currency${activeCurrency.crypto ? ' crypto-currency-active' : ''}`);
  }, [activeCurrency, isOpenSelect]);

  useEffect(() => {
    setToggleClasses(`toggle${isSpin ? ' spin-animation' : ''}${isOpenSelect ? ' hide-toggle' : ''}`);
  }, [isSpin, isOpenSelect]);

  useEffect(() => {
    setSelectWrapperClasses(`select-currency-wrapper${isOpenSelect ? ' select-currency-wrapper-open' : ''}`);
  }, [isOpenSelect]);

  const onToggleHandler = () => {
    setActiveCurrency({crypto: !activeCurrency.crypto, usd: !activeCurrency.usd});
    setIsSpin(true);
  };

  const onClickSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const onClickSelectCurrency = obj => {
    setSelectedCurrency(obj);
    onClickSelect();
  };

  const scrollBarStyles = {
    height: '100%',
    width: '100%'
  };

  return (
    <div className="calculator">
      <div className="currency-block">
        <div className={colorBlockClasses}/>
        <div className={cryptoCurrencyClasses}>
          <span className={cryptoCurrencyNameClasses}>
            {`${selectedCurrency.coinName} (${selectedCurrency.coin})`}
          </span>
          <button
            className="arrow-down"
            onClick={onClickSelect}
          >
            <ArrowDown/>
          </button>
          {isOpenSelect &&
            <div className={selectWrapperClasses}>
              <Scrollbar style={scrollBarStyles}>
                {PRODUCT_CARDS_ARRAY.filter(el => el.coinName !== selectedCurrency.coinName).map(currency =>
                  <button
                    key={currency.label}
                    onClick={() => onClickSelectCurrency(currency)}
                  >
                    {`${currency.coinName} (${currency.coin})`}
                  </button>
                )}
              </Scrollbar>
            </div>}
        </div>
        <button
          className={toggleClasses}
          onClick={onToggleHandler}
          onAnimationEnd={() => setIsSpin(false)}
        >
          <img src={ToggleArrow} alt="toggle"/>
        </button>
        <div className={usdCurrencyNameClasses}>
          {`${CALCULATOR_DOLLAR_TEXT} (${CALCULATOR_DOLLAR_SYMBOL})`}
        </div>
      </div>
      <div className="currency-inputs-block">
        <span className="crypto-currency-amount"/>
        <span className="usd-currency-amount"/>
      </div>
    </div>
  );
};

export default Calculator;
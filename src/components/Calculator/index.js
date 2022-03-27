import CurrencySelector from './-CurrencySelector';
import {useContext, useEffect, useState} from 'react';
import CurrencyInput from './-CurrencyInput';
import {CALCULATOR_DOLLAR_SYMBOL, EARNING_CARDS_DATA} from '../../data/calculator';
import {CoinsContext} from '../../context/CoinsContext';
import './style/style.scss';
import EarningCard from './-Earning-card';

const Calculator = () => {
  const coins = useContext(CoinsContext);
  const [selectedCurrency, setSelectedCurrency] = useState(coins[0]);
  const [activeCurrency, setActiveCurrency] = useState({crypto: true, usd: false});
  const [cryptoValue, setCryptoValue] = useState(1);
  const [usdValue, setUsdValue] = useState(1);

  const onChangeInputValue = val => {
    if (activeCurrency.crypto) {
      setCryptoValue(val);
      setUsdValue(val * selectedCurrency.price);
    } else if (activeCurrency.usd) {
      setUsdValue(val);
      setCryptoValue(val / selectedCurrency.price);
    }
  };

  const setValueHandler = e =>
    onChangeInputValue(e.target.value);

  useEffect(() => {
    onChangeInputValue(activeCurrency.crypto
      ? cryptoValue
      : usdValue
    );
  }, [selectedCurrency]);

  return (
    <>
      <div className="calculator">
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          activeCurrency={activeCurrency}
          setActiveCurrency={setActiveCurrency}
        />
        <div className="currency-inputs-block">
          <CurrencyInput
            className="crypto-input"
            coin={selectedCurrency.coin}
            isActive={activeCurrency.crypto}
            setValue={setValueHandler}
            value={cryptoValue}
          />
          <CurrencyInput
            className="usd-input"
            coin={CALCULATOR_DOLLAR_SYMBOL}
            isActive={activeCurrency.usd}
            setValue={setValueHandler}
            value={usdValue}
          />
        </div>
      </div>
      <div className="earning-block">
        {EARNING_CARDS_DATA.map(card =>
          <EarningCard
            isCryptoActive={activeCurrency.crypto}
            data={card}
            key={card.period}
            cryptoValue={cryptoValue}
            usdValue={usdValue}
            coin={selectedCurrency.coin}
          />
        )}
      </div>
    </>
  );
};

export default Calculator;
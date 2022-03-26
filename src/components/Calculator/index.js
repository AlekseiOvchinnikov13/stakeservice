import CurrencySelector from './-CurrencySelector';
import {useContext, useState} from 'react';
import CurrencyInput from './-CurrencyInput';
import {CALCULATOR_DOLLAR_SYMBOL} from '../../data/calculator';
import {CoinsContext} from '../../context/CoinsContext';
import './style/style.scss';

const Calculator = () => {
  const coins = useContext(CoinsContext);
  const [selectedCurrency, setSelectedCurrency] = useState(coins[0]);
  const [activeCurrency, setActiveCurrency] = useState({crypto: true, usd: false});

  return (
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
        />
        <CurrencyInput
          className="usd-input"
          coin={CALCULATOR_DOLLAR_SYMBOL}
          isActive={activeCurrency.usd}
        />
      </div>
    </div>
  );
};

export default Calculator;
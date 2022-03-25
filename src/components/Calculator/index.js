import './style/style.scss';
import CurrencySelector from './-CurrencySelector';
import {PRODUCT_CARDS_ARRAY} from '../../data/home';
import {useState} from 'react';

const Calculator = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(PRODUCT_CARDS_ARRAY[0]);
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
        <span className="crypto-currency-amount"/>
        <span className="usd-currency-amount"/>
      </div>
    </div>
  );
};

export default Calculator;
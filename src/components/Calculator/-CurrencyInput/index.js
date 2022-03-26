import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';
import {useState} from 'react';

const CurrencyInput = ({className, coin, isActive}) => {
  const [value, setValue] = useState(0);
  const classes = classNames(
    'currency-input',
    className,
    {'active-input': isActive}
  );

  const onChangeValue = e =>
    setValue(e.target.value.replace(',', '.'));

  return (
    <div className={classes}>
      <input
        type="number"
        step="any"
        min="0"
        onChange={onChangeValue}
        value={value}
        readOnly={!isActive}
      />
      <span>{`(${coin.toUpperCase()})`}</span>
    </div>
  );
};

CurrencyInput.propTypes = {
  className: PropTypes.string,
  coin: PropTypes.string,
  isActive: PropTypes.bool
};

export default CurrencyInput;
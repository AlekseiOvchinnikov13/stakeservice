import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const CurrencyInput = ({
  className,
  coin,
  isActive,
  value,
  setValue
}) => {

  const classes = classNames(
    'currency-input',
    className,
    {'active-input': isActive}
  );

  return (
    <div className={classes}>
      <input
        type="number"
        step="any"
        min="0"
        onChange={setValue}
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
  isActive: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
};

export default CurrencyInput;
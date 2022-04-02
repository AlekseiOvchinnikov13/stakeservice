import classNames from 'classnames';
import './style/style.scss';
import PropTypes from 'prop-types';
import ArrowRight from './-ArrowRight';

const Button = ({label, onClick, className}) => {
  const classes = classNames('button', className);

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {label}
      <ArrowRight/>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
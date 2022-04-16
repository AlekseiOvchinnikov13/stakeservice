import classNames from 'classnames';
import PropTypes from 'prop-types';
import ArrowRight from './-ArrowRight';
import './style/style.scss';

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
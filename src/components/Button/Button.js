import classNames from 'classnames';
import './style/style.scss';
import PropTypes from 'prop-types';
import ArrowRight from './-ArrowRight';

const Button = ({label, onClick, type, className}) => {
  const classes = classNames('button', className);

  return (
    <button
      onClick={onClick}
      className={classes}
      type={type}
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
  type: PropTypes.string
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
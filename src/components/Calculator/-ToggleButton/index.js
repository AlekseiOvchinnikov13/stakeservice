import ToggleArrow from '../images/toggle-arrow.svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const ToggleButton = ({
  isSpin,
  isOpenSelect,
  onToggleHandler,
  onAnimationEnd
}) => {
  const classes = classNames(
    'toggle',
    {'spin-animation': isSpin},
    {'hide-toggle': isOpenSelect}
  );

  return (
    <button
      className={classes}
      onClick={onToggleHandler}
      onAnimationEnd={onAnimationEnd}
    >
      <img src={ToggleArrow} alt="toggle"/>
    </button>
  );
};

ToggleButton.propTypes = {
  isSpin: PropTypes.bool.isRequired,
  isOpenSelect: PropTypes.bool.isRequired,
  onToggleHandler: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func.isRequired
};

export default ToggleButton;
import './style/style.scss';
import classNames from 'classnames';
import Text from '../Text';
import PropTypes from 'prop-types';

const SubTitleBlock = ({label, title, text, Component, className, isBlueStick}) => {
  const classes = classNames(
    'subtitle-block',
    className,
    {'blue-stick': isBlueStick}
  );

  return (
    <div className={classes}>
      {label && <span>{label}</span>}
      <h6>{title}</h6>
      {text && <Text text={text}/>}
      {Component && <Component/>}
    </div>
  );
};

SubTitleBlock.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  Component: PropTypes.func,
  isBlueStick: PropTypes.bool
};

export default SubTitleBlock;
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/style.scss';

const TextStroke = ({text, className, isUpperCase}) => {
  const classes = classNames('text-stroke', className, {'text-uppercase': isUpperCase});

  return (
    <p className={classes}>{text}</p>
  );
};

TextStroke.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  isUpperCase: PropTypes.bool
};

export default TextStroke;
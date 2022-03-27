import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/style.scss';

const TextStroke = ({text, className, isUpperCase, isNonCase}) => {
  const classes = classNames(
    'text-stroke',
    className,
    {'text-uppercase': isUpperCase},
    {'text-non-case': isNonCase}
  );

  return (
    <p className={classes}>{text}</p>
  );
};

TextStroke.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  isUpperCase: PropTypes.bool,
  isNonCase: PropTypes.bool
};

export default TextStroke;
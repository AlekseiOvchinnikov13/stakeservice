import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/style.scss';

const Tag = ({label, className}) => {
  const classes = classNames('tag', className);

  return (
    <span className={classes}>{label}</span>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Tag;
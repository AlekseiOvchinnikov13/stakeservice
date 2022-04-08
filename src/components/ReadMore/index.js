import PropTypes from 'prop-types';
import './style.scss';
import classNames from 'classnames';
import {READ_MORE_TEXT_DEFAULT_CLOSE, READ_MORE_TEXT_DEFAULT_OPEN} from '../../data/common';

const ReadMore = ({onClick, textOpen, textClose, isOpen}) => {
  const classes = classNames(
    'read-more-button',
    {'read-more-open': isOpen},
  );

  return (
    <button className={classes} onClick={onClick}>
      {!isOpen && textOpen}
      {isOpen && textClose}
    </button>
  );
};

ReadMore.propTypes = {
  onClick: PropTypes.func,
  textOpen: PropTypes.string,
  textClose: PropTypes.string,
  isOpen: PropTypes.bool
};

ReadMore.defaultProps = {
  textOpen: READ_MORE_TEXT_DEFAULT_OPEN,
  textClose: READ_MORE_TEXT_DEFAULT_CLOSE,
};

export default ReadMore;

import PropTypes from 'prop-types';
import './style.scss';
import classNames from 'classnames';

const ReadMore = ({onClick, textOpen, textClose, isOpen, children}) => {
  const classes = classNames(
    'read-more-button',
    {'read-more-open': isOpen},
    {'read-more-button-with-children': children}
  );

  return (
    <button className={classes} onClick={onClick}>
      {!isOpen && textOpen}
      {isOpen && textClose}
      {children && children}
    </button>
  );
};

ReadMore.propTypes = {
  onClick: PropTypes.func,
  textOpen: PropTypes.string,
  textClose: PropTypes.string,
  children: PropTypes.any,
  isOpen: PropTypes.bool
};

export default ReadMore;

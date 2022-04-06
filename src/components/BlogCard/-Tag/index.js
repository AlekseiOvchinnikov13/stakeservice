import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/style.scss';
import {useState} from 'react';

const Tag = ({label, className, isFilter, addHandle, delHandle}) => {
  const [isActive, setActive] = useState(false);
  const onClickHandle = (e) => {
    !isActive ? addHandle(e) : delHandle(e);
    setActive(!isActive);
  };

  const classes = classNames('tag', className, {'tag-filter-button': isFilter}, {'tag-filter-active': isActive});

  return (
    <>
      {isFilter
        ? (<button
          className={classes}
          onClick={e => onClickHandle(e.target.value)}
          value={label}
        >
          {label}
        </button>)
        : <span className={classes}>{label}</span>
      }
    </>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  isFilter: PropTypes.bool,
  addHandle: PropTypes.func,
  delHandle: PropTypes.func,
  className: PropTypes.string
};

export default Tag;
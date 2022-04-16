import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import './style/style.scss';

const LinkArrow = ({to, label, className, isOpenNewPage}) => {
  const classes = classNames('link-arrow', className);
  const isNav = to.startsWith('/');

  return (
    <>
      {isNav
        ? (<NavLink className={classes} target={isOpenNewPage && '_blank'} to={to}>{label}</NavLink>)
        : (<a className={classes} target={isOpenNewPage && '_blank'} href={to}>{label}</a>)
      }
    </>
  );
};

LinkArrow.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  isOpenNewPage: PropTypes.bool
};

LinkArrow.defaultProps = {
  label: 'See All',
  to: '/blog'
};

export default LinkArrow;
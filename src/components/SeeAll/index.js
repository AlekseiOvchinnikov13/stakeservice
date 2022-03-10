import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './style/style.scss';

const SeeAll = ({onClick, to, asLink, label}) => {


  return (
    <>
      {asLink
        ? <NavLink className="see-all see-all-link" to={to}>{label}</NavLink>
        : <button className="see-all see-all-button" onClick={onClick}>{label}</button>
      }
    </>
  );
};

SeeAll.propTypes = {
  asLink: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
};

SeeAll.defaultProps = {
  label: 'see all'
};

export default SeeAll;
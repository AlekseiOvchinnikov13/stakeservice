import {NavHashLink} from 'react-router-hash-link';
import {menu} from '../../../data/menu';
import './style/style.scss';
import CalculatorButton from '../-CalculatorButton';
import classNames from 'classnames';
import {useRef} from 'react';
import {isMobile} from '../../../helpers/helpers';

const Menu = () => {
  const classes = classNames(
    'menu',
    {'menu-mobile': isMobile()}
  );

  const menuRef = useRef(null);

  const menuClassToggle = () => {
    menuRef && menuRef.current.classList.toggle('menu-mobile-open');
    document.querySelector('body').classList.toggle('stop-overflow');
  };

  const burgerOnClick = () => {
    menuClassToggle();
  };

  const menuClickHandler = e => {
    if (isMobile() && e.target.tagName === 'A') {
      menuClassToggle();
    }
  };

  return (
    <menu className={classes} ref={menuRef} onClick={menuClickHandler}>
      {isMobile() && (
        <button
          onClick={burgerOnClick}
          className="burger"
        >
          <span className="burger-stick top-stick"/>
          <span className="burger-stick middle-stick"/>
          <span className="burger-stick bottom-stick"/>
        </button>
      )}
      <ul className="menu-list">
        {menu.map(menuItem =>
          <li key={menuItem.label} className="menu-item">
            <NavHashLink
              smooth
              to={menuItem.to}
              className="menu-item__link"
              activeClassName="menu-item__link-active"
            >
              {menuItem.label}
              <a href={menuItem.to}/>
            </NavHashLink>
          </li>
        )}
        {isMobile() && <CalculatorButton/>}
      </ul>
    </menu>
  );
};

export default Menu;
import {NavHashLink} from 'react-router-hash-link';
import {menu} from '../../../data/menu';
import './style/style.scss';

const Menu = () => {
  return (
    <menu className='menu'>
      <ul className='menu-list'>
        {menu.map(menuItem =>
          <li key={menuItem.label} className='menu-item'>
            <NavHashLink
              smooth
              to={menuItem.to}
              className='menu-item__link'
              activeClassName='menu-item__link-active'
            >
              {menuItem.label}
            </NavHashLink>
          </li>
        )}
      </ul>
    </menu>
  );
};

export default Menu;
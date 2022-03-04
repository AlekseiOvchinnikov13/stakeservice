import LogoSvg from './images/logo.svg';
import {NavLink} from 'react-router-dom';

const Logo = () => (
  <NavLink to={'/'}>
    <img src={LogoSvg} alt="logo"/>
  </NavLink>
);


export default Logo;
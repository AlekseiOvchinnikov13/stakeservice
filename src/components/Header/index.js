import Menu from './-Menu';
import Logo from './-Logo';
import CalculatorButton from './-CalculatorButton';
import './style/style.scss';
import {isMobile} from '../../helpers/helpers';

const Header = () => {
  return (
    <header className="header container">
      <Logo/>
      <Menu/>
      {!isMobile() && <CalculatorButton/>}
    </header>
  );
};

export default Header;
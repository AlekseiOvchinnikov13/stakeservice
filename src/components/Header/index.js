import Menu from './-Menu';
import Logo from './-Logo';
import CalculatorButton from './-CalculatorButton';
import {isMobile} from '../../helpers/helpers';
import './style/style.scss';

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
import Menu from './-Menu';
import Logo from './-Logo';
import CalculatorButton from './-CalculatorButton';
import './style/style.scss';

const Header = () => {
  return (
    <header className="header container">
      <Logo/>
      <Menu/>
      <CalculatorButton/>
    </header>
  );
};

export default Header;
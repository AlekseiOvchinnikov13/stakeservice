import './style/style.scss';
import Menu from './-Menu';
import Logo from './-Logo';
import CalculatorButton from './-CalculatorButton';

const Header = () => {
  return (
    <header className='header'>
      <Logo/>
      <Menu/>
      <CalculatorButton/>
    </header>
  );
};

export default Header;
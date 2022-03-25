import {NavHashLink} from 'react-router-hash-link';
import {menuCalcItem} from '../../../data/menu';
import './style/style.scss';

const CalculatorButton = () =>
  <NavHashLink
    smooth
    className={'calculator-button'}
    to={menuCalcItem.to}
  >
    {menuCalcItem.label}
  </NavHashLink>;

export default CalculatorButton;
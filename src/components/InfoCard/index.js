import PropTypes from 'prop-types';
import classNames from 'classnames';
import {toast} from 'react-toastify';
import Toast from '../Toast';
import './style/style.scss';

const InfoCard = ({
  value,
  title,
  isAddress,
  className
}) => {
  const classes = classNames(
    'card-info__item',
    className,
    {'card-info__item-address': isAddress}
  );

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        toast.success('Copied!');
      })
      .catch(() => {
        toast.error('Something went wrong...');
      });
  };

  return (
    <>
      {isAddress && <Toast/>}
      <div className={classes}>
        <span className="card-info__active-text">
          {value ? value : '-'}{isAddress && <button onClick={copyToClipBoard}>copy</button>}
        </span>
        <span className="card-info__text">{title}</span>
      </div>
    </>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isAddress: PropTypes.bool,
  className: PropTypes.string
};

export default InfoCard;
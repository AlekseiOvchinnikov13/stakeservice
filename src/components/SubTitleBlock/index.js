import './style/style.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Text from '../Text';

const SubTitleBlock = ({label, title, text, className}) => {
  const classes = classNames('subtitle-block', className);

  return (
    <div className={classes}>
      {label && <span>{label}</span>}
      <h6>{title}</h6>
      <Text text={text}/>
    </div>
  );
};

SubTitleBlock.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default SubTitleBlock;
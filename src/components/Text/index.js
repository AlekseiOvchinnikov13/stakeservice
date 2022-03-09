import './style/style.scss';
import PropTypes from 'prop-types';

const Text = ({text}) => {

  return (
    <p
      className="paragraph-text"
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text;
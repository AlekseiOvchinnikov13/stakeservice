import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/style.scss';

const Text = ({text, isDescription}) => {
  const classes = classNames('paragraph-text', {'description-text': isDescription});

  return (
    <p
      className={classes}
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  isDescription: PropTypes.bool
};

export default Text;
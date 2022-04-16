import ModalWindow from '../ModalWindow';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import classNames from 'classnames';
import './style/style.scss';

const ModalWindowContactForm = ({className, onClose, title, visible, projectId}) => {
  const classes = classNames(className, 'modal-contact-form');

  return (
    <ModalWindow
      visible={visible}
      onClose={onClose}
      title={title}
      className={classes}
    >
      <ContactForm projectId={projectId}/>
    </ModalWindow>
  );
};

ModalWindowContactForm.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  projectId: PropTypes.string
};

export default ModalWindowContactForm;
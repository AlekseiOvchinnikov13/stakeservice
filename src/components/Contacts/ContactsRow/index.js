import PropTypes from 'prop-types';

const ContactsRow = ({
  data: {
    img,
    label,
    href
  }
}) => {

  return (
    <a href={href} className="contacts-links__item">
      <img src={img} alt={label}/>
      <span>{label}</span>
    </a>
  );
};

ContactsRow.propTypes = {
  data: PropTypes.object
};

export default ContactsRow;
import {CONTACT_LINKS} from '../../data/home';
import ContactsRow from './ContactsRow';
import './style.scss';

const Contacts = () => {

  return (
    <div className="contacts-links">
      {CONTACT_LINKS.map(link =>
        <ContactsRow data={link} key={link.label}/>
      )}
    </div>
  );
};

export default Contacts;
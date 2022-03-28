import './style.scss';
import {useState} from 'react';
import {
  BUTTON_SUBMIT_TEXT,
  INPUT_CHECKBOX_TEXT,
  INPUT_EMAIL_PLACEHOLDER,
  INPUT_NAME_PLACEHOLDER
} from '../../data/Form';
import Button from '../Button/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(true);

  const onSubmitHandle = () => {
    console.log('\'it\'s ok');
  };

  return (
    <form id="write-to-us">
      <div className="form-text-input-wrapper">
        <input
          id="name"
          name="first-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={INPUT_NAME_PLACEHOLDER}
          required
        />
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={INPUT_EMAIL_PLACEHOLDER}
          required
        />
        <label className="checkbox-label">
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          {INPUT_CHECKBOX_TEXT}
        </label>
      </div>
      <Button
        onClick={onSubmitHandle}
        type="submit"
        label={BUTTON_SUBMIT_TEXT}
        className="submit-button"
      />
    </form>
  );
};

export default ContactForm;
import {useState} from 'react';
import {useForm, ValidationError} from '@formspree/react';
import {
  BUTTON_SUBMIT_TEXT,
  INPUT_CHECKBOX_TEXT,
  INPUT_EMAIL_PLACEHOLDER,
  INPUT_NAME_PLACEHOLDER,
  TEXT_AFTER_SUBMIT
} from '../../data/Form';
import './style/style.scss';
import ArrowRight from '../Button/-ArrowRight';
import Loader from '../Loader';
import Text from '../Text';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvolbvjv');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  if (state.submitting) {
    return <Loader/>;
  }

  if (state.succeeded) {
    return <Text text={TEXT_AFTER_SUBMIT}/>;
  }

  return (
    <form id="write-to-us" onSubmit={handleSubmit}>
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
        <ValidationError
          prefix="first-name"
          field="first-name"
          errors={state.errors}
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
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
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
      <button
        type="submit"
        className="submit-button"
        disabled={state.submitting}
      >
        {BUTTON_SUBMIT_TEXT}
        <ArrowRight/>
      </button>
    </form>
  );
};

export default ContactForm;
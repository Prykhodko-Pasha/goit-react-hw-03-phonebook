import PropTypes from 'prop-types';
import s from '../Contacts/Contacts.module.css';

export default function ContactsSearch({ value, onChange }) {
  return (
    <label className={s.wrapper}>
      <input
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

ContactsSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

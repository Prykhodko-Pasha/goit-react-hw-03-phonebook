import PropTypes from 'prop-types';
import s from '../Contacts/Contacts.module.css';

export default function ContactsItem({ id, name, number, onDeleteContact }) {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        className={s.del__btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

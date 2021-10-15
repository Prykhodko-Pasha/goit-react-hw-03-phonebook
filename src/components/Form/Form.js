import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

export default class Form extends React.Component {
  state = {
    // id: '',
    name: '',
    number: '',
  };

  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newId = uuidv4();
    // this.setState({ id: newId }, () => {
    //   this.props.onAddContact(this.state);
    //   this.reset();
    // });
    this.props.onAddContact({ name, number, id: newId });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.onSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <br />
        <label>
          <input
            type="tel"
            name="number"
            placeholder="Number"
            value={number}
            onChange={this.onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={s.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

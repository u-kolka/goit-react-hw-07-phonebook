import { nanoid } from 'nanoid';
// import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css'

function ContactForm() {
  const dispatch = useDispatch();
  const nameInputId = nanoid(7);
  const numberInputId = nanoid(7);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

      dispatch(addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      }));
  
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.form__label} htmlFor={nameInputId}> Name
        <input
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.form__label} htmlFor={numberInputId}> Number
        <input
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
      </label>
      <button className={css.form__btn} type='submit'>Add contact</button>
    </form>
  );
}

export default ContactForm;
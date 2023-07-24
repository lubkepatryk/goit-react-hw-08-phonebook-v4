// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { addContact } from 'redux/contacts/operations';
// import css from './ContactEditor.module.css';
// import { nanoid } from '@reduxjs/toolkit';

// export const ContactEditor = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
//     if (name !== '') {
//       dispatch(addContact(name, number));
//       form.reset();
//       return;
//     }
//     alert('Contact name cannot be empty. Enter some text!');
//   };

//   const handleChangeName = (event) => {
//     const value = event.target.value;
//     setName(value);
//   };

//   const handleChangeNumber = (event) => {
//     const value = event.target.value;
//     setNumber(value);
//   };

//   const loginNameId = nanoid();
//   const loginNumberId = nanoid();

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.label} htmlFor={loginNameId}>
//           Name
//         </label>
//         <input
//           id={loginNameId}
//           onChange={handleChangeName}
//           value={name}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <label className={css.label} htmlFor={loginNumberId}>
//           {' '}
//           Number{' '}
//         </label>
//         <input
//           id={loginNumberId}
//           onChange={handleChangeNumber}
//           value={number}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       <button type="submit" className={css.button}>
//         Add contact
//       </button>
//     </form>
//   );
// };

import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeName = event => {
    const value = event.target.value;
    setName(value);
  };

  const handleChangeNumber = event => {
    const value = event.target.value;
    setNumber(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ nameText: name, numberText: number }));
    setName('');
    setNumber('');
  };

  const loginNameId = nanoid();
  const loginNumberId = nanoid();

  return (
    <div>
      <h2>Add new contact</h2>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label} htmlFor={loginNameId}>
          Name
        </label>
        <TextField
          variant="standard"
          id={loginNameId}
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={css.label} htmlFor={loginNumberId}>
          {' '}
          Number{' '}
        </label>
        <TextField
          variant="standard"
          id={loginNumberId}
          onChange={handleChangeNumber}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button variant="contained">Add contact</Button>
      </form>
    </div>
  );
};

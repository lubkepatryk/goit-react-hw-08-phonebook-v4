import { useDispatch } from 'react-redux';
// import { selectAllContacts } from 'redux/contacts/selectors';
import { delContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleDelete = (contactId) => dispatch(delContact(contactId));

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <span className={css.phoneNumber}>{contact.name} {contact.number}</span>
          <Button
            variant="contained"
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
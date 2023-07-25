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
          {contact.name} {contact.number}
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
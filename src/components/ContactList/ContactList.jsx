import { useSelector } from 'react-redux';
// import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
// import css from './ContactList.module.css';
import PropTypes from 'prop-types';
// import { deleteContact } from 'redux/contacts/operations';
import { delContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

// export const ContactList = () => {
//   const contacts = useSelector(selectAllContacts);

//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id}>
//           <Contact id={id} name={name} number={number} />
//         </li>
//       ))}
//     </ul>
//   );
// };
export const ContactList = ({ id }) => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  //const handleDelete = () => dispatch(deleteContact(id));
  const handleDelete = () => dispatch(delContact(id));
  return (
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name} {contact.number}
          <Button
            variant="contained"
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            {' '}
            Delete{' '}
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

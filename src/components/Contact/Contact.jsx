import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contacts/operations';
import css from './Contact.module.css';
import Button from '@mui/material/Button';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(delContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <Button variant="contained" type="button" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

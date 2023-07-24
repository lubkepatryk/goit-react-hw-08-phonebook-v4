import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <TextField id="standard-basic" variant="standard" type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <TextField id="standard-basic" variant="standard" type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <TextField id="standard-basic" variant="standard" type="password" name="password" />
      </label>
      <Button variant="contained" type="submit">Register</Button>
    </form>
  );
};
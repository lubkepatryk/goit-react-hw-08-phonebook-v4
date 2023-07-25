import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '..//../redux/contacts/selectors';
import { setFilter } from '..//../redux/contacts/operations';
import TextField from '@mui/material/TextField';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <h2 className={css.filterHeading}>Search contacts</h2>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <TextField id="standard-basic" variant="standard"
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
import { OutlinedInput } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setQueryFilter } from 'redux/filter/slice';

function Filter() {
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const newValue = event.target.value;
    dispatch(setQueryFilter(newValue));
  };

  return (
    <OutlinedInput
      fullWidth
      type="text"
      name="filter"
      placeholder="Search by name"
      onChange={handleInputChange}
    />
  );
}

export default Filter;

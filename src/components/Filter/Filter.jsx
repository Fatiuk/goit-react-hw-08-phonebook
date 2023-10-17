import { setQueryFilter } from 'redux/filterSlice';
import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';

function Filter() {
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const newValue = event.target.value;
    dispatch(setQueryFilter(newValue));
  };

  return (
    <FilterInput
      type="text"
      name="filter"
      placeholder="Search by name"
      onChange={handleInputChange}
    />
  );
}

export default Filter;

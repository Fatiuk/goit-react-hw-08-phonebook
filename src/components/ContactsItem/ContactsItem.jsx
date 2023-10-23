import { Link, Chip, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactSpan } from './ContactsItem.styled';

function ContactsItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItem
      style={{
        display: 'flex',
        gap: 40,
      }}
    >
      <ContactSpan>{name}</ContactSpan>
      <Link href={`tel:${number}`}>{number}</Link>
      <Chip label="Delete" icon={<DeleteIcon />} onClick={handleDelete}></Chip>
    </ListItem>
  );
}

export default ContactsItem;

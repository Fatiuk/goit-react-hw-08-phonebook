import {
  ListItemAvatar,
  Avatar,
  Link,
  Chip,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import stringAvatar from 'utils/avatarCreator';

function ContactsItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ListItemAvatar>
        <Avatar {...stringAvatar(name)} />
      </ListItemAvatar>
      <ListItemText>{name}</ListItemText>
      <Link href={`tel:${number}`}>{number}</Link>
      <Chip label="Delete" icon={<DeleteIcon />} onClick={handleDelete}></Chip>
    </>
  );
}

export default ContactsItem;

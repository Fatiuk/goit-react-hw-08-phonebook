import {
  ListItemAvatar,
  Avatar,
  Link,
  Chip,
  ListItemText,
  Box,
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ListItemAvatar>
          <Avatar {...stringAvatar(name)} />
        </ListItemAvatar>
        <ListItemText>{name}</ListItemText>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Link href={`tel:${number}`}>{number}</Link>
        <Chip label="Edit" icon={<DeleteIcon />} onClick={handleDelete}></Chip>
        <Chip
          label="Delete"
          icon={<DeleteIcon />}
          onClick={handleDelete}
        ></Chip>
      </Box>
    </>
  );
}

export default ContactsItem;

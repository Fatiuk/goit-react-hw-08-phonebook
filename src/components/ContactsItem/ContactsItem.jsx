import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ContactSpan,
  ContactLink,
  ContactDeleteBtn,
} from './ContactsItem.styled';

function ContactsItem({ contact: { name, phone, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactSpan>{name}</ContactSpan>
      <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
      <ContactDeleteBtn type="button" onClick={handleDelete}>
        Delete
      </ContactDeleteBtn>
    </>
  );
}

export default ContactsItem;

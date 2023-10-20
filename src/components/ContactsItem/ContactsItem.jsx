import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactSpan,
  ContactLink,
  ContactDeleteBtn,
} from './ContactsItem.styled';

function ContactsItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactSpan>{name}</ContactSpan>
      <ContactLink href={`tel:${number}`}>{number}</ContactLink>
      <ContactDeleteBtn type="button" onClick={handleDelete}>
        Delete
      </ContactDeleteBtn>
    </>
  );
}

export default ContactsItem;

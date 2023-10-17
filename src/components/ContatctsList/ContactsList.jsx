import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AtomicSpinner from 'atomic-spinner';
import { getContacts, getFilter } from 'redux/selectors';
import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
} from './ContactsList.styled';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter
    ? items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : items;

  return (
    <ContactListWrap>
      {isLoading && <AtomicSpinner />}
      {items && !isLoading && (
        <PhonebookList>
          {filteredContacts.map(contact => (
            <PhonebookItem key={contact.id}>
              <ContactsItem contact={contact}></ContactsItem>
            </PhonebookItem>
          ))}
        </PhonebookList>
      )}
      {error && <b>{error}</b>}
    </ContactListWrap>
  );
};

export default ContactList;

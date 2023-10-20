import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AtomicSpinner from 'atomic-spinner';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
} from './ContactsList.styled';
import { useAuth } from 'hooks';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import { fetchContacts } from 'redux/contacts/operations';

const ContactList = () => {
  // Create a Redux dispatcher
  const dispatch = useDispatch();
  // Use auth selectors
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

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

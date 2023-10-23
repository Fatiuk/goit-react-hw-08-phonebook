import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Grid, List, ListItem, useMediaQuery } from '@mui/material';
import AtomicSpinner from 'atomic-spinner';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
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

  const isPhoneDisplay = useMediaQuery('(max-width:426px)');

  return (
    <>
      {isLoading && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <AtomicSpinner />
          </Grid>
        </Grid>
      )}
      {items && !isLoading && (
        <List>
          {filteredContacts.map((contact, index) => (
            <React.Fragment key={contact.id}>
              <ListItem
                sx={{
                  display: 'flex',
                  columnGap: 20,
                  rowGap: isPhoneDisplay ? 2 : 0,
                  justifyContent: isPhoneDisplay ? 'center' : 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <ContactsItem contact={contact} />
              </ListItem>
              {index !== filteredContacts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      )}
      {error && <b>{error}</b>}
    </>
  );
};

export default ContactList;

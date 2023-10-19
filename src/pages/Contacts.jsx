import { Container } from '@mui/material';
// ============ ContactForm ============
import ContactForm from '../components/ContactForm/ContactForm';
// ============ ContactList ============
import Filter from '../components/Filter/Filter';
// ============ ContactList ============
import ContactList from '../components/ContatctsList/ContactsList';

const Contacts = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>📚 Phonebook 📞</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </Container>
  );
};

export default Contacts;

import { Container, Card } from '@mui/material';
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
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card sx={{ p: 4, maxWidth: 1024 }}>
        <h1>📚 Phonebook 📞</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>
      </Card>
    </Container>
  );
};

export default Contacts;

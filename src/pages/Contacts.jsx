// ============ ContactForm ============
import ContactForm from '../components/ContactForm/ContactForm';
// ============ ContactList ============
import Filter from '../components/Filter/Filter';
// ============ ContactList ============
import ContactList from '../components/ContatctsList/ContactsList';

const Contacts = () => {
  return (
    <>
      <h1>📚 Phonebook 📞</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </>
  );
};

export default Contacts;

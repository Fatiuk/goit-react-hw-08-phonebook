// ============ Section ============
import Section from '../components/Section/Section';
// ============ ContactForm ============
import ContactForm from '../components/ContactForm/ContactForm';
// ============ ContactList ============
import Filter from '../components/Filter/Filter';
// ============ ContactList ============
import ContactList from '../components/ContatctsList/ContactsList';

const Contacts = () => {
  return (
    <Section title="📚 Phonebook 📞">
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </Section>
  );
};

export default Contacts;

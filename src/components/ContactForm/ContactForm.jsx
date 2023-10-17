import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import {
  FormWrap,
  InputContainer,
  ContactLabel,
  ContactInput,
  AddContactButton,
} from './ContactForm.styled';

const ContactForm = () => {
  // Create a Redux dispatcher
  const dispatch = useDispatch();
  // Method that adds a contact when the form is submitted
  const handleSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    // Create data from form
    const dataByForm = {
      name: form.name.value,
      number: form.number.value,
    };
    // Dispatch the addContacts action with form data
    dispatch(addContact(dataByForm));
    // Reset form
    form.reset();
  };

  return (
    <FormWrap type="submit" onSubmit={handleSubmitForm}>
      <InputContainer>
        <ContactLabel>Name</ContactLabel>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputContainer>
      <InputContainer>
        <ContactLabel>Number</ContactLabel>
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputContainer>
      <AddContactButton type="submit">Add contact</AddContactButton>
    </FormWrap>
  );
};

export default ContactForm;

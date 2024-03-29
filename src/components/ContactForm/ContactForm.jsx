import { useDispatch, useSelector } from 'react-redux';
import { createContactsThunk } from 'redux/ContactsThunk';
import { getContacts } from 'redux/selectors';
import { Label, Input, Form, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChangeInput = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const contactName = name.value;
    const contactNumber = number.value;
    event.target.reset();
    if (isContactNew(contacts, contactName)) {
      alert(`${contactName} is already in contacts`);
      return;
    }
    dispatch(createContactsThunk({ name: contactName, phone: contactNumber }));
  };

  const isContactNew = (contacts, newContact) => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === newContact.toLowerCase()
    );
  };

  return (
    <Form onSubmit={onChangeInput}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contacts.name}
          required
        />
      </Label>
      <Label>
        Phone number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={contacts.number}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

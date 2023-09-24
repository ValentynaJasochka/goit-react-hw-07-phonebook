import { deleteContactsThunk } from 'redux/ContactsThunk';
import { useDispatch } from 'react-redux';
import { Button, ContactStyle, Name } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };
  return (
    <ContactStyle>
      <Name>
        {name}: {number}
      </Name>
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </ContactStyle>
  );
};

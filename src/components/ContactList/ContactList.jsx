import { useSelector } from "react-redux";
import ContactListItem from './ContactListItem';

const getFilteredContacts = (contacts, filterValue) => {
  if (filterValue) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
  };
  return contacts;
  };

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter);
  const filteredContacts = getFilteredContacts(contacts, filterValue);

  return (
    <ul>
      {filteredContacts.length > 0 && filteredContacts.map(item =>
        <ContactListItem key={item.id} name={item.name} number={item.number} contactID={item.id} />)}
    </ul>)
}

export default ContactList;
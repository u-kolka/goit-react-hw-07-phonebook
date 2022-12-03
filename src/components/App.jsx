import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import Wrapper from "./Wrapper/Wrapper";

const App = () => {
  const loading = useSelector(state => state.contacts.isLoading);
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading && <Loader></Loader>}
      <ContactList />
      <ToastContainer autoClose={3000} theme={"light"} icon={false} />
    </Wrapper>
  );
}

export default App;

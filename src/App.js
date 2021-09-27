import { addContacts, removeContact, filterContact } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";
import "./App.css";

function App({ onAddContact, onRemoveContact, onFilterContact }) {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.contactsReducer);

  const addContact = (nextContact) => {
    const sameName = items.some(
      (contact) =>
        contact.name.toLocaleLowerCase() ===
        nextContact.name.toLocaleLowerCase()
    );
    if (sameName) {
      alert(`${nextContact.name} is already in contacts`);
    } else {
      return dispatch(addContacts(nextContact));
    }
  };

  const handleRemove = (id) => {
    return dispatch(removeContact(id));
  };

  const changeFilter = (e) => {
    return dispatch(filterContact(e));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm handleSubmit={addContact} />
      <h2 className="contactsTitle">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contactsList={getVisibleContacts()}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;

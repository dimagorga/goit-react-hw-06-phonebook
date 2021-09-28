import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm />
      <h2 className="contactsTitle">Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

export default App;

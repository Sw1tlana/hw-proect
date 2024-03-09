import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState, useEffect } from 'react';

const contactFormData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts,] = useState(contactFormData);
  const [searchText, setSearchText] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

const handleSearch = (text) => {
  setSearchText(text);
}

useEffect(() => {
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredContacts(filteredContacts);
}, [contacts, searchText]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchText={searchText} handleSearch={handleSearch}/>
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
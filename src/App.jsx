import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const contactFormData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts,setContacts] = useState(contactFormData);
  const [searchText, setSearchText] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

const handleAddContacts = (newContact) => {
  setContacts([...contacts, {...newContact, id: nanoid()}]);
}

const handleSearch = (text) => {
  setSearchText(text);
}

const onDeleteContact = (contactId) => {
  setContacts((prevState) => {
    return prevState((contact) => contact.id !== contactId);
  })
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
      <ContactForm handleAddContacts={handleAddContacts}/>
      <SearchBox searchText={searchText} handleSearch={handleSearch}/>
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact}/>
    </div>
  );
}

export default App;
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import SearchBox from './components/SearchBox/SearchBox';

const contactFormData = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


function App() {
const [contacts, setContacts ] = useState(contactFormData);
const [searchText, setSearchText] = useState("");
const [filteredContacts, setFilteredContacts] = useState([]);

const handleAddContact = (newContact) => {
  setContacts([...contacts, {...newContact, id: nanoid()}]);
}

const handleDeleteContacts = (contactId) => {
 setContacts((prevState) => {
  return prevState.filter((contact) => contact.id !== contactId)
})
}

const handleSearch = (text) => {
  setSearchText(text);
}

useEffect(() => {
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase()
  .includes(searchText.toLowerCase()));
  setFilteredContacts(filteredContacts);
}, [searchText, contacts]);



  return (
    <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact}/>
        <SearchBox searchText={searchText} handleSearch={handleSearch}/>
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContacts}/>
    </div>
      
  )
}

export default App

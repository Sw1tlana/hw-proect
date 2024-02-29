import { useState } from 'react';
import ProductGallery from './components/ProductCard/ProductGallery';
import productCard  from './productCard.json';
import Mailbox from './components/MailBox/Mailbox';

const emailsData = [
  { id: "1", email: "rex135@gmail.com"},
  { id: "2", email: "asdg@SDFH.COM"},
  { id: "3", email: "xcvbh@zsgsdfhj.com"},
]

function App() {
const [counter, setCounter] = useState(0);
const [emails, setEmails] = useState(emailsData);
const [showMailBox, setshowMailBox] = useState(false);

 const onLogEmail = () => {
  console.log('Email.for sent')
  setCounter(counter + 1);
 }

 const handleDelete = (mailId) => {
  console.log("mailId", mailId);
  setEmails(prevState => prevState.filter((email) => email.id !== mailId));
}

const handleMailBox = () => {
  setshowMailBox(prevState => !prevState);
}

  return (
    <div>
      <h2>Email counts: {counter}</h2>
      <button type="button" onClick={handleMailBox}>{showMailBox ? "Hide" : "Show"} mail Box</button>
      {showMailBox ? (<Mailbox emails={emails} 
      emailCounter={counter}
      onLogEmail={onLogEmail} 
      onDeleteEmail={handleDelete}/>) : null}
      <ProductGallery productCard={productCard}/>
 </div>
      
  )
}

export default App

import ProductGallery from './components/ProductCard/ProductGallery';
import productCard  from './productCard.json';
import Mailbox from './components/MailBox/Mailbox';

function App() {
 const onLogEmail = () => {
  console.log('Email.for sent')
 }

 const handleDelete = (mailId) => {
  console.log("mailId", mailId)
}

  return (
    <div>
      <ProductGallery productCard={productCard}/>
      <Mailbox onLogEmail={onLogEmail} onDeleteEmail={handleDelete}/>
 </div>
      
  )
}

export default App

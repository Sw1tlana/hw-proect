import ProductGallery from './components/ProductCard/ProductGallery';
import productCard  from './productCard.json';

function App() {
 

  return (
    <div>
      <ProductGallery productCard={productCard}/>
 </div>
      
  )
}

export default App

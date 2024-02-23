import ProductCard from "../ProductCard/ProductCard";
import css from '../../App.module.css';
 const ProductGallery = ({ productCard }) => {
  return (
    <div className={css.galleryWrapper}>
        {[...productCard]
        .sort((a, b) => {
            const isPromotionalA = a.quantity <= 2;
            const isPromotionalB = b.quantity <= 2;
            return isPromotionalB - isPromotionalA;
        })
        .map((item) => {
            const isPromotional = item.quantity <= 2;
            return (
                <ProductCard 
                key={item.id}
                img={item.img}
                productName={item.productName}
                price={item.price}
                hasDiscount={item.hasDiscount}
                quantity={item.quantity}
                description={item.description}
                promotional={isPromotional}
                />
            )
        })
    }
        
    </div>
  );
};

export default ProductGallery

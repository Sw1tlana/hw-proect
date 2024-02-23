import { IoIosCart } from "react-icons/io";
import css from '../ProductCard.module.css';
const ProductCard = ({ 
  img, 
  productName,
   price, 
   description, 
   hasDiscount = false }) => {
    return (
    <div className={css.card}>
      <img className={css.cardImg} src={img} alt={productName} width={400}/>
            <h3 className={css.cardTitle}>{productName}{hasDiscount && <span className={css.cardSurprise}>🎁 BIG SALE</span>}</h3>
            <h4 className={css.cardPrice}>Price: ${price}</h4>
            <p className={css.cardDescription}>{description}</p>
            <div className={css.cardWrapperBtn}>
            <button className={css.cardButton} type="button"><IoIosCart/>Add to card</button>
            <button className={css.cardSmileBtn} type="button">😵</button>
            </div>
    </div>
  )
}
export default ProductCard
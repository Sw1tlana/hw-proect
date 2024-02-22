export const ProductCard = ({ img, productName, price, description, hasDiscount = false }) => {
    return (
    <div>
      <img src={img} alt="" width={400}/>
            <h3>{productName}{hasDiscount && <span>🎁 BIG SALE</span>}</h3>
            <h4>Price: ${price}</h4>
            <p>{description}</p>
            <button type="button">Add to card</button>
            <button type="button">😃</button>
    </div>
  )
}

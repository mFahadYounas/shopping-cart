import { useAppDispatch } from "../../hooks/reduxHooks";
import { addItem } from "../../store/slices/cartSlice";
import "./Card.css"

type PropTypes = {
    id: number,
    imgSrc: string,
    productInfo: string,
    productPrice: string
}

function Card({ id, imgSrc, productInfo, productPrice }: PropTypes) {

  const appDispatch = useAppDispatch();

  const handleAddClick = () => {
    appDispatch(addItem({
      itemId: id,
      itemName: productInfo,
      price: productPrice,
      quantity: 1,
      imgUrl: imgSrc
  }
    ))
  }


  return (
    <div className="card">
        <img className="cardImg" src={imgSrc} alt="laptop" />
        <div className="infoContainer">
            <span className="productInfo">{productInfo}</span>
            <span className="productPrice">{productPrice}</span>
        </div>
        <button className="addToCartButton" onClick={handleAddClick}>Add to cart</button>
    </div>
  )
}

export default Card
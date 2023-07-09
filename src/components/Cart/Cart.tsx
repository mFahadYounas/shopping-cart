import CartItem from '../CartItem/CartItem'
import './Cart.css'
import { useSelector } from 'react-redux'
import { selectCart } from '../../store/slices/cartSlice'

function Cart() {

  const cartItems = useSelector(selectCart);

  return (
    <div className="cart" onClick={(e) => e.stopPropagation()}>
        <h1 className='title'>Cart</h1>
        {cartItems.map((item) => (
          <CartItem key={item.itemId} id={item.itemId} itemImg={item.imgUrl} itemName={item.itemName} price={item.price} quantity={item.quantity} />
        ))}
    </div>
  )
}

export default Cart
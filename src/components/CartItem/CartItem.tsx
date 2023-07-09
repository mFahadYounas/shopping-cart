import { CloseOutlined } from '@ant-design/icons'
import './CartItem.css'
import { Button } from 'antd'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { decQuantity, incQuantity, removeItem, selectCart } from '../../store/slices/cartSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

type PropTypes = {
    id: number,
    itemImg: string,
    itemName: string,
    price: string,
    quantity: number
}

function CartItem({id, itemImg, itemName, price, quantity}: PropTypes) {
    
    const cartItems = useSelector(selectCart);

    useEffect(() => {
        
    })

    const appDispatch = useAppDispatch();

    const handleQuantityInc = () => {
        appDispatch(incQuantity(id));
    }
    const handleQuantityDec = () => {
        appDispatch(decQuantity(id));
    }

  return (
    <div className="cartItem">
        
        <div className='cartItem__left'>
            <img src={itemImg} alt="item" />
            <div className='quantity'>
                <button className='changeQuantity' onClick={handleQuantityDec}>-</button>
                <p>{quantity}</p>
                <button className='changeQuantity' onClick={handleQuantityInc}>+</button>
            </div>
        </div>

        <p className='itemName'>{itemName}</p>
    
        <div className='cartItem__right'>
            <span className='closeIcon'>
                <Button 
                size='small'
                type='text' 
                icon={<CloseOutlined />}
                onClick={() => appDispatch(removeItem(id))}/>
            </span>
            <div><p>{price}</p></div>
        </div>
    
    </div>
  )
}

export default CartItem
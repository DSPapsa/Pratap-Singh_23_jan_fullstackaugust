
import '../CheckoutProduct/CheckoutProduct.css';
import { useStateValue} from './StateProvider'

function CheckoutProduct({id,image,title,price}) {
    const [{cart},dispatch] = useStateValue();
    // const removeFromCart = () => {
        // remove the items from the  cart
    /*dispatch({
        type: 'REMOVE_FROM_CART',
        id:id,
    })*/
    }
    return (
        <div className='CheckoutProduct'>
            <img className='checkoutproduct_image' src={image}/>
        
        <div className='checkoutproduct_info'>
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>
                <small>₹</small>
                <strrong>{price}</strrong>
            </p>
           
            <button onClick={removeFromCart}>Remove From Cart</button>
        </div>
        </div>
    )


export default CheckoutProduct
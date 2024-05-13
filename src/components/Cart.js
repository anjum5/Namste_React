import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
    const cartItem=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())

    }
  return (
    <div className="text-center m-2 p-2 ">
      <h4 className="text-lg font-bold">Cart</h4>
      <div  className="w-6/12 m-auto">
        <ItemList items={cartItem}/>
        <button className="m-1 p-1 border-black bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        {cartItem.length==0 && <h1>Your cart is empty!!</h1>}
      </div>
    </div>
  );
};

export default Cart;

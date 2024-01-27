import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatting } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressCounter";
import CartItem from "./CartItem";

const Cart = () => {
  const { items ,addItem,removeItem } = useContext(CartContext);
 const {progress,hideCart,showCheckout}= useContext(UserProgressContext)
  const cartTotal=items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price,0)
  function handleCloseCart(){
    hideCart()
  }
  function handleCheckoutOpen(){
    showCheckout()
  }
  return (
    <Modal open={progress==="cart"}onClose={progress==="cart"?handleCloseCart:null}>
      <h2> Your Cart</h2>   
      <ul>
        {
            items.map((item)=>(
               <CartItem {...item} key={item.id} item onIncrease={()=>addItem(item)} onDecrease={()=>removeItem(item.id)}/>
            ))
        }
      </ul>
      <p className="cart-total">{currencyFormatting.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart} >Close</Button>
        {items.length >0 &&<Button onClick={handleCheckoutOpen}> Go to Checkout</Button> }
      </p>
    </Modal>
  );
};

export default Cart;

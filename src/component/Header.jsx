import React, { useContext } from 'react'
import image from "../assets/logo.jpg"
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressCounter'

const Header = () => {
   const {items}= useContext(CartContext)
  const {showCart}= useContext(UserProgressContext)
   const totalCartItem=items.reduce((totalNumberOfItems,item)=>{
    return totalNumberOfItems+item.quantity
   },0)

   const handleShowCart = () => {
     showCart()
   }
   
  return (
    <header id='main-header'>
        <div id='title'>
        <img src= {image}alt="a logo of food" />
        <h1>Foody</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>
                cart({totalCartItem})
            </Button>
            
        </nav>
    </header>
  )
}

export default Header
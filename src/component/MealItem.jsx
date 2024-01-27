import React, { useContext } from 'react'

import { currencyFormatting } from '../util/formatting'
import Button from './UI/Button'
import  CartContext  from '../store/CartContext'
const MealItem = ({meal}) => {
  const {addItem}= useContext(CartContext)
  function handleAddItem(){
    addItem(meal)
  }
  return (
    <li className='meal-item'>
        <article>
          <img src={meal.image} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <p className='meal-item-price'>{currencyFormatting.format(meal.price) }</p>
              <p className="meal-item-description">{meal.description}</p>
          </div>
          <p className="meal-item-actions">
            <Button onClick={handleAddItem}>
              Add to Cart
            </Button>
          </p>
        </article>
    </li>
  )
}

export default MealItem
import { currencyFormatting } from "../util/formatting";

export default function CartItem({name,quantity,price,onIncrease,onDecrease}) {
  return (
    <li className="cart-item">
      <p>{name} - {quantity} X {currencyFormatting.format(price)} </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>QTY</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

import React from 'react';
import CartItem from './CartItem';


export default function CartLists({value}) {
  const {cart} = value;   
       
 return (
    <div className="Container-fluid">
   {cart.map(item => {
   return <CartItem key={item.id} item={item}
   value={value} />;
   })}
    </div>
  );
}
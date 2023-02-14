import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FoodItem from './FoodItem'
import  {clearCart}  from '../utils/cartSlice'

const Cart = () => {
  const cartItems= useSelector(store=>store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart= ()=>{
    alert("are you sure")
    dispatch(clearCart())
  }
  return (
    <div>
   
    <h1 className="font-bold text-3xl">
        Cart items!!-{cartItems.length}
    </h1>
    <button onClick={()=>handleClearCart()}className="m-2 bg-red-500  rounded p-1 text-white">
      Clear Cart
    </button>
    
    

<div className="flex gap-2 justify-evenly flex-wrap">

    {cartItems.map((item,idx) => (
    <FoodItem key={idx} {...item}/>)
    )
}
</div>
    </div>
  )
}

export default Cart
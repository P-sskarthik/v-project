import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'
export const Products = ({item}) => {

const {handleCount} = useContext(CartContext)
  return (
    <div className="flex flex-row items-center  justify-around h-[250px] bg-white  rounded-lg shadow-md m-2 p-2">
    
      <img src={item.image} className="h-50 w-50" ></img>
      <div>
        <span>Category: {item.category}</span><br/>
        <span>Title: {item.title}</span>
      </div>
      <div className="flex flex-col gap-[0.5]">
         <span className="font-bold text-xl&">{item.price}</span>
        <button
        onClick ={handleCount}
        className=" hover:bg-yellow-600 text-black bg-yellow-500 font-bold py-2 px-4 rounded">Add to cart &nbsp;&nbsp; 🛒</button>
      </div>
    
    </div>

  )
}

import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {

const [itemsCount, setItemsCount] = useState(0)

const handleCount = (count) =>
{
  setItemsCount(itemsCount + 1)
}

  return (
   <CartContext.Provider
   value={{itemsCount, handleCount}}
   >
    {
children
    }
   </CartContext.Provider>
  )
}



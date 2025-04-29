import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'

const NavBar = () => {


const {itemsCount} = useContext(CartContext)


  return (
    <div >Items - {itemsCount}</div> 
  )
}

export default NavBar
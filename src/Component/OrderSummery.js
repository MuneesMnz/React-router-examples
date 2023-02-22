import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummery() {
    const navigate=useNavigate()
  return (
    <div>
      <h1>Order Conformed</h1>
      <button onClick={()=> navigate(-1)}>go back</button>
      
    </div>
  )
}

export default OrderSummery

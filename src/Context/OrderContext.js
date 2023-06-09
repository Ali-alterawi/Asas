import React, { createContext, useState } from 'react'

export const OrderContext = createContext();
function OrderProvider({ childern }) {
 
    const [orderBtn, setOrderBtn] = useState("order");


  return (
    <>
    <OrderContext.Provider value={{orderBtn, setOrderBtn}}>
    {childern}
    </OrderContext.Provider>
    </>
  )
}

export default OrderProvider
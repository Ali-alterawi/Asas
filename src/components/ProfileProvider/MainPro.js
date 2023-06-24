import React from 'react'
import OrderPro from './OrderPro'
import ProfilePro from './ProfilePro'
import SettingsPro from './SettingsPro'
import CompletedOrdersPro from './CompletedOrdersPro'
import NewOrdersPro from './NewOrdersPro'
import AllDetails from './AllDetails'

const MainPro = () => {
  return (
    <div>

        <OrderPro/>
        <ProfilePro/>
        <SettingsPro/>
        <CompletedOrdersPro/>
        <NewOrdersPro/>
        <AllDetails/>
    </div>
  )
}

export default MainPro
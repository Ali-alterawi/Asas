import React from 'react'
import ProviderPic from './ProviderPic'
import OrdersPro from './OrdersListPro'
import SettingsListPro from './SettingsListPro'

const SidebarPro = () => {
  return (
    <div className=" my-3 border rounded-4">
        <ProviderPic/>
        <OrdersPro/>
        <SettingsListPro/>
    </div>
  )
}

export default SidebarPro
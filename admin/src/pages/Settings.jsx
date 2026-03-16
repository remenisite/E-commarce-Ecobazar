import React from 'react'
import AccountSettings from '../components/settings/AccountSettings'
import BillingAddress from '../components/settings/BillingAddress'
import ChangePassword from '../components/settings/ChangePassword'

const Settings = () => {
  return (
    <div className='w-full'>
        <AccountSettings/>
        <BillingAddress />
        <ChangePassword />
    </div>
  )
}

export default Settings
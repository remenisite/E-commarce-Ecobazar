import AdditionalInfo from '@/app/components/checkout/AdditionalInfo'
import BillingForm from '@/app/components/checkout/BillingForm'
import OrderSummary from '@/app/components/checkout/OrderSummary'
import React from 'react'

const page = () => {
  return (
    <div>
        <BillingForm />
        <AdditionalInfo />
        <OrderSummary />
    </div>
  )
}

export default page
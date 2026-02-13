import React from 'react'

import vectorIcon1 from '../../assets/images/Vector1.png'
import vectorIcon2 from '../../assets/images/Vector2.png'
import vectorIcon3 from '../../assets/images/Vector3.png'
import vectorIcon4 from '../../assets/images/Vector4.png'
import vectorIcon5 from '../../assets/images/Vector5.png'
import vectorIcon6 from '../../assets/images/Vector6.png'
const VectorIcon = () => {
  return (
    <div className='container grid grid-cols-6 gap-[120px] py-[60px]'>
        <p>  <img src={vectorIcon1} alt="vectoricon" /> </p>
        <p>  <img src={vectorIcon2} alt="vectoricon" /> </p>
        <p>  <img src={vectorIcon3} alt="vectoricon" /> </p>
        <p>  <img src={vectorIcon4} alt="vectoricon" /> </p>
        <p>  <img src={vectorIcon5} alt="vectoricon" /> </p>
        <p>  <img src={vectorIcon6} alt="vectoricon" /> </p>
    </div>
  )
}

export default VectorIcon
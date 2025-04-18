import React from 'react'
import { back } from '../assets/indes'

const AbsoluteBack = () => {
  return (
    <div 
      style={{
        backgroundImage: 'url(' + back + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '50%',
        zIndex: -1000,
        backgroundRepeat: 'no-repeat',
      }}>
      
    </div>
  )
}

export default AbsoluteBack

import React, { useContext, useEffect } from 'react'
import { cartContext } from '../../context'

export default function Statistics() {
  const {setTitle} = useContext(cartContext)
  useEffect(()=>{
    setTitle('Gadget Heaven | Statistics')
  },[])
  return (
    <div>Statistics</div>
  )
}

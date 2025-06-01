import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/counterSlics'


const Shop = () => {
  let dispatch=useDispatch()
  let data=useSelector((state)=>state.counter.value)

 
  return (
   <Container>
    <button onClick={()=>dispatch(increment(10))}>Increment</button>
    <button onClick={()=>dispatch(decrement(10))}>Decrement</button>
    <h1>{data}</h1>
   </Container>
  )
}

export default Shop
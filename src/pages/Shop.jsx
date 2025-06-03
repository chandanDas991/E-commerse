import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/counterSlics'
import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'


const Shop = () => {
  let dispatch=useDispatch()
  let data=useSelector((state)=>state.counter.value)
  let data2=useSelector((state)=>state.active.prvevalue)
  let data3=useSelector((state)=>state.active.daybefore)
 
  return (
   <section className='py-[126px]'>
    <Container>
      <SubHeading text="Shop"/>
      <p className='pb-[136px]'><Link to={data2=="Home"?"/":`/${data}`}>{data}</Link> > shop</p>
     

    <button onClick={()=>dispatch(increment(10))}>Increment</button>
    <button onClick={()=>dispatch(decrement(10))}>Decrement</button>
    <h1>{data}</h1>
   </Container>
   </section>
  )
}

export default Shop
import React from 'react'
import Banner from '../Layouts/Banner'
import Add from '../Layouts/Add'
import Container from '../components/Container'
import Cart from '../components/Cart'


const Home = () => {
  return (
    <>
      <Banner/>
      <Add/>
      <Container>
        <Cart/>
      </Container>
    </>
  )
}

export default Home
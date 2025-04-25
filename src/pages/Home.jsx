import React from 'react'
import Navber from '../Layouts/Navber'
import Sideber from '../Layouts/Sideber'
import Footer from '../Layouts/Footer'


const Home = () => {
  return (
    <div>
       <Navber/>
       <Sideber/>
       <h1>Home page</h1>
       <Footer/>
    </div>
  )
}

export default Home
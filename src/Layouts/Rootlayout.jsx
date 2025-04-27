import React from 'react'
import Navber from '../Layouts/Navber'
import Sideber from '../Layouts/Sideber'
import Footer from '../Layouts/Footer'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <Navber/>
       <Sideber/>
       <Outlet/> 
       <Footer/>
    </div>
  )
}

export default Rootlayout
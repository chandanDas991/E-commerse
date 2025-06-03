import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logoheader.png'
import List from '../components/List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activebutton } from '../slices/breadcrumb'

const Navber = () => {
  let dispatch=useDispatch()
  let handleClick=(name)=>{
    dispatch(activebutton(name))
  }
  return (
    <nav className='py-8 '>
        <Container>
           <Flex>
            <div className='w-4/12'>
                <Link to='/'><Image src={Logo}/></Link>
            </div>

            <div className='w-6/12'>
              <ul className='flex gap-x-10'>
                  <Link onClick={()=>handleClick("Home")} to='/'> <List text="Home"/> </Link>
                  <Link onClick={()=>handleClick("Shop")} to='/shop'> <List text="Shop"/> </Link>
                  <Link onClick={()=>handleClick("About")} to='/about'> <List text="About"/> </Link>
                  <Link onClick={()=>handleClick("Contacts")} to='/contacts'> <List text="Contacts"/> </Link>
                  <Link onClick={()=>handleClick("Journal")} to='/'> <List text="Journal"/> </Link>
              </ul>    
            </div>

                <div className='w-2/12'>
                    <ul className='flex gap-x-5'>
                    <List text="EN"/>
                    <List text="RU"/>
                    </ul>
                </div>
           </Flex>
        </Container>
    </nav>
  )
}

export default Navber
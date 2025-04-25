import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logoheader.png'
import List from '../components/List'

const Navber = () => {
  return (
    <nav className='py-8 '>
        <Container>
           <Flex>
            <div className='w-4/12'>
                <Image src={Logo}/>
            </div>

            <div className='w-6/12'>
              <ul className='flex gap-x-10'>
              <List text="Home"/>
              <List text="Shop"/>
              <List text="About"/>
              <List text="Contacts"/>
              <List text="Journal"/>
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
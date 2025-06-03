import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Chandan from '../assets/product5.png'
import Chandan1 from '../assets/product13.png'
import Flex from '../components/Flex'
import Button from '../components/Button'
import AboutCart from '../components/AboutCart'
import SubHeading from '../components/SubHeading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const About = () => {
  let data=useSelector((state)=>state.active.prvevalue)
  let data2=useSelector((state)=>state.active.daybefore)
  
  return (
    <section className='py-[124px]'>
      <Container>
      <SubHeading text="About"/>
      <p> <Link to={data2=="Home"?"/":`/${data}`}>{data}</Link> > about</p>
     

       <Flex className='justify-between pb-[128px] pt-[136px]'>
       <div className='w-[49%] relative'>
       <Image className='w-full' src={Chandan} />
       <Button className='absolute bottom-8 left-1/2 -translate-x-1/2' text='Our Brands'/>
       </div>

       <div className='w-[49%] relative'>
       <Image className='w-full' src={Chandan1} />
       <Button className='absolute bottom-8 left-1/2 -translate-x-1/2' text='Our Stores'/>
       </div>
       </Flex>

          <p className='text-f39 text-secondary font-normal font-dm'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>

          <Flex className='justify-between mt-[128px]'>
            <AboutCart title="Our Vision" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
            <AboutCart title="Our Story" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
            <AboutCart title="Our Brands" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
          </Flex>

      </Container>
    </section>
  )
}

export default About
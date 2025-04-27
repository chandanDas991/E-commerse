import React from 'react'
import Image from '../components/Image'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Banner1 from '../assets/Banner1.jpg'
import Two from '../assets/two.png'
import Car from '../assets/car.png'
import Refres from '../assets/refres.png'

const Home = () => {
  return (
    <div>
       <section>
        <Image className='w-full' src={Banner1}/>
        <Container>
          
          <Flex className='justify-between'>
          <Flex className='items-center gap-x-4'>
            <Image src={Two}/>
            <p className='text-base text-[#6D6D6D] font-dm font-normal'>Two years warranty</p>
          </Flex>

          <Flex className='items-center gap-x-4'>
            <Image src={Car}/>
            <p className='text-base text-[#6D6D6D] font-dm font-normal'>Free shipping</p>
          </Flex>

          <Flex className='items-center gap-x-4'>
            <Image src={Refres}/>
            <p className='text-base text-[#6D6D6D] font-dm font-normal'>Return policy in 30 days</p>
          </Flex>
          </Flex>

        </Container>
       </section>
    </div>
  )
}

export default Home
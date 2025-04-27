import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Add1 from '../assets/Ad_1.jpg'
import Add2 from '../assets/Ad_2.jpg'
import Add3 from '../assets/Ad_3.jpg'

const Add = () => {
  return (
    <section className='pt-[140px] pb-[128px] '>
        <Container>
            <Flex className='justify-between'>
                <div className='w-[49%]'>
                <Image className='w-full' src={Add1}/>
                </div>

                <div className='w-[49%]'>
                <Image className='w-full ' src={Add2}/>
                <Image className='w-full pt-10' src={Add3}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Add
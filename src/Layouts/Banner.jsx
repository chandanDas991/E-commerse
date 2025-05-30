import React from 'react'
import Image from '../components/Image'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Banner1 from '../assets/Banner1.jpg'
import Two from '../assets/two.png'
import Car from '../assets/car.png'
import Refres from '../assets/refres.png'
import { Link } from 'react-router-dom'
import Banner2 from '../assets/Banner2.png'
import Banner3 from '../assets/Banner3.png'
import Banner4 from '../assets/Banner4.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const Banner = () => {
   const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div>
        0{i + 1}
      </div>
    )
  };

  return (
    <section className='border-b border-[#F0F0F0]'>

       <Slider {...settings}>
      <div>
        <Link to='./contact'><Image className='w-full' src={Banner1}/></Link>
      </div>

      <div>
        <Link to='./contact'><Image className='w-full' src={Banner2}/></Link>
      </div>

      <div>
        <Link to='./contact'><Image className='w-full' src={Banner3}/></Link>
      </div>

      <div>
        <Link to='./contact'><Image className='w-full' src={Banner4}/></Link>
      </div>
    
    </Slider>

        <Container>
          
          <Flex className='justify-between'>
          <Flex className='items-center gap-x-4 py-[30px]'>
            <Image src={Two}/>
            <p className='text-base text-[#6D6D6D] font-dm font-normal'>Two years warranty</p>
          </Flex>

          <Flex className='items-center gap-x-4 py-[30px]'>
            <Image src={Car}/>
            <p className='text-base text-[#6D6D6D] font-dm font-normal'>Free shipping</p>
          </Flex>

          <Flex className='items-center gap-x-4 py-[30px]'>
            <Image src={Refres}/>
            <p className='text-base text-[#6D6D6D] font-dm font-normal'>Return policy in 30 days</p>
          </Flex>
          </Flex>

        </Container>
       </section>
  )
}

export default Banner
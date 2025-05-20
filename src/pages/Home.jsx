import React from 'react'
import Banner from '../Layouts/Banner'
import Add from '../Layouts/Add'
import Container from '../components/Container'
import Cart from '../components/Cart'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'
import Image from '../components/Image'
import Ads_4 from '../assets/Ads_4.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'







const Home = () => {
   var settings = {
   arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
    
  };

  return (
    <>
      <Banner/>
      <Add/>
      <Container>
      <SubHeading className="pb-10" text='New Arrivals'/>

         <Slider {...settings}>
      <div>
        <Cart src={product1} price='20$' title="Basic Crew Neck Tee"/>
      </div>
      <div>
        <Cart src={product2} price='50$' title="Basic Crew Neck Tee"/>
      </div>
      <div>
         <Cart src={product3} price='40$' title="Basic Crew Neck Tee"/>
      </div>
      <div>
       <Cart src={product4} price='30$' title="Basic Crew Neck Tee"/>
      </div>
      
    </Slider>

        <Flex className='justify-between'>
    
        </Flex>
      </Container>

      <Container>
      <SubHeading className="pb-10 mt-[118px]" text='Our Bestsellers'/>
        <Flex className='justify-between mb-[130px]'>
        <Cart src={product5} price='20$' title="Basic Crew Neck Tee"/>
        <Cart src={product6} price='50$' title="Basic Crew Neck Tee"/>
        <Cart src={product7} price='40$' title="Basic Crew Neck Tee"/>
        <Cart src={product8} price='30$' title="Basic Crew Neck Tee"/>
        </Flex>
      </Container>

      <Container>
        <Image className='mb-[128px]' src={Ads_4} />
      </Container>

      <Container>
      <SubHeading className="pb-10 mt-[128px]" text='Special Offers'/>
        <Flex className='justify-between mb-[130px]'>
        <Cart src={product9} price='20$' title="Basic Crew Neck Tee"/>
        <Cart src={product10} price='50$' title="Basic Crew Neck Tee"/>
        <Cart src={product11} price='40$' title="Basic Crew Neck Tee"/>
        <Cart src={product12} price='30$' title="Basic Crew Neck Tee"/>
        </Flex>
      </Container>
     
    </>
  )
}

export default Home
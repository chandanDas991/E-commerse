import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import product13 from '../assets/product13.png'
import product14 from '../assets/product12.png'
import product15 from '../assets/product11.png'
import product16 from '../assets/product10.png'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import { FaStar } from 'react-icons/fa'
import { IoAdd } from 'react-icons/io5'
import { Fa1 } from 'react-icons/fa6'
import { CgMathMinus } from 'react-icons/cg'
import Button from '../components/Button'


const Products = () => {
  return (
    <section className='py-[150px]'>
      <Container>
        <Flex className='flex-wrap justify-between gap-y-8'>
           <div className='w-w49'>
           <Image className='w-full' src={product13}/>
           </div>

           <div className='w-w49'>
           <Image className='w-full' src={product14}/>
           </div>

           <div className='w-w49'>
           <Image className='w-full' src={product15}/>
           </div>

           <div className='w-w49'>
           <Image className='w-full' src={product16}/>
           </div>
        </Flex>

        <SubHeading className='pt-12 pb-4' text='Product'/>

        <Flex className='gap-x-6 items-center'>
          <ul className='flex gap-x-[2px]'>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
          </ul>
          <p className='text-sm text-primary font-dm font-normal'>1 Review</p>
        </Flex>

        <Flex className='items-center gap-x-[22px] py-6 border-b border-[#F0F0F0] w-w49'>
         <del className='text-primary'><p className='text-base text-primary font-normal font-dm'>$88.00</p></del>
          <p className='text-xl text-secondary font-bold font-dm'>$44.00</p>
        </Flex>

        <Flex className='items-center gap-x-[58px] pt-8'>
          <h4 className='text-base text-secondary font-dm font-bold'>COLOR:</h4>
          <ul className='flex gap-x-[15px]'>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-[#979797]'></li>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-[#FF8686]'></li>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-[#7ED321]'></li>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-[#B6B6B6]'></li>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-[#15CBA5]'></li>
          </ul>
        </Flex>
        

        <Flex className='items-center gap-x-[80px] pt-8'>
          <h4 className='text-base text-secondary font-dm font-bold'>SIZE:</h4>
         <select className='py-2 px-12 border border-[#F0F0F0]'>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
          <option value="">XXL</option>
         </select>
        </Flex>

        <Flex className='items-center gap-x-[35px] pt-8 border-b border-[#F0F0F0] w-w49 pb-[30px]'>
          <h4 className='text-base text-secondary font-dm font-bold'>QUANTITY:</h4>
            <div className='flex gap-x-5 py-2 px-8 border border-[#F0F0F0]'>
              <span><IoAdd /></span>
              <span><Fa1 /></span>
              <span><CgMathMinus /></span>
            </div>
        </Flex>

        <Flex className='items-center gap-x-[35px] py-8 border-b border-[#F0F0F0] w-w49 '>
          <h4 className='text-base text-secondary font-dm font-bold'>STATUS:</h4>
          <h5 className='text-base text-primary font-dm font-normal'>In stock</h5>
           
        </Flex>

       <Flex className='gap-x-[20px] py-8 border-b border-[#F0F0F0] w-w49 '>
       <Button text='Add to Wish List'></Button>
       <Button text='Add to Cart'></Button>
       </Flex>
       
       <Flex className='justify-between py-8 border-b border-[#F0F0F0] w-w49'>
       <h4 className='text-base text-secondary font-dm font-bold'>FEATURES & DETAILS</h4>
       <p className='text-secondary text-lg'>+</p>
       
       </Flex>

          <div className='py-8 w-w49'>
          <p className='text-base text-primary font-dm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <Flex className='gap-x-[62px]'>
            <h4 className='text-xl text-primary font-dm font-normal'>Description</h4>
            <h4 className='text-xl text-secondary font-dm font-bold'>Reviews (1)</h4>
       </Flex>  

       <p className='text-primary text-base font-dm font-normal py-8 border-b border-[#F0F0F0] w-full'>1 review for Product</p>

       <Flex className='justify-between pt-6'>
          <Flex className='gap-x-[37px] items-center'>
          <p className='text-sm text-primary font-dm font-normal'>John Ford</p>
          <ul className='flex gap-x-[2px]'>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
          </ul>
          </Flex>
          <p className=''>6 months ago</p>
          
        </Flex>  
        <p className='text-primary text-base font-dm font-normal py-8 border-b border-[#F0F0F0] w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <h4 className='text-xl text-secondary font-dm font-bold py-12'>Add a Review</h4>

       <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Name <br/>
        <input className='py-6 mb-6 w-w49 border-b border-[#F0F0F0]' id="name" type="text" placeholder='your name here'/>
       </label>
        <br/>
       <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Email <br/>
        <input className='py-6 mb-6 w-w49 border-b border-[#F0F0F0]' id="name" type="text" placeholder='Your email here'/>
       </label>
        <br/>
       <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Review <br/>
        <textarea className='py-6 mb-6 w-w49 border-b border-[#F0F0F0]' id="name" type="text" placeholder='Your review here'/>
       </label>
        <br/>
       <Button text="Post"/>
        
      </Container>
    </section>
  )
}

export default Products
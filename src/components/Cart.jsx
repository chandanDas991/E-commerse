import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'

import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'

const Cart = ({price,src,title}) => {
  return (
    <div className='w-[370px] relative group '>
       <div className='w-full h-[370px]'>
        <Image className='w-full ' src={src}/>
       </div>
    
        <div className='w-full bg-white absolute -bottom-[110px] left-0 group-hover:bottom-[90px] duration-500 opacity-0 group-hover:opacity-100 '>

            <ul className='flex flex-col items-end py-6 px-8 gap-y-4 cursor-pointer '>
                <li className='text-base text-primary font-dm font-normal hover:text-secondary hover:font-bold duration-400'>Add to Wish List<FaHeart className='inline text=sm ml-4'/></li>
                <li className='text-base text-primary font-dm font-normal hover:text-secondary hover:font-bold duration-400'>Compare<FaCodeCompare className='inline text=sm ml-4'/></li>
                <li className='text-base text-primary font-dm font-normal hover:text-secondary hover:font-bold duration-400'>Add to Cart<FaShoppingCart className='inline text=sm ml-4'/></li>
            </ul>
            
        </div>

        <Flex className='justify-between items-center'>
         <h4 className='text-xl text-secondary font-dm font-bold pt-6'>{title}</h4>
         <p className='text-base text-primary font-dm font-normal'>{price}</p>
        </Flex>
        <p className='text-base text-primary font-dm font-normal pt-[15px]'>Black</p>

        <button className='py-2 px-8 bg-black text-white text-sm font-dm font-bold absolute top-5 left-5'>New</button>
    </div>
  )
}

export default Cart
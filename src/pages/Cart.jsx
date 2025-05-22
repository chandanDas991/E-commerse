import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import { CgChevronRight } from 'react-icons/cg'
import Image from '../components/Image'
import Chandan20 from '../assets/product12.png'
import Button from '../components/Button'


const Cart = () => {
  return (
    <section className='py-26'>
      <Container>
        <SubHeading text='Cart'/>
        <Flex className='items-center gap-x-[3px] pb-[136px]'>
          <p className='text-sm text-[#6D6D60] font-dm font-notmal'>Home</p>
      <span className='text-sm text-[#6D6D60] font-dm font-notmal'><CgChevronRight className=''/></span>
          <p className='text-sm text-[#6D6D60] font-dm font-notmal'>Cart</p>
        </Flex>

        <Flex className='gap-x-[340px] bg-[#F5F5F3] p-8'>
          <h5 className='text-base text-secondary font-dm font-bold leading-6'>Product</h5>
          <h5 className='text-base text-secondary font-dm font-bold leading-6'>Price</h5>
          <h5 className='text-base text-secondary font-dm font-bold leading-6'>Quantity</h5>
          <h5 className='text-base text-secondary font-dm font-bold leading-6'>Total</h5>
        </Flex>

        <Flex className='items-center border border-[#F0F0F0] pb-8'>
          <div className='flex gap-x-10 pt-8 items-center'>
            <div className='pl-5 text-base text-secondary font-dm font-bold leading-6'>x</div>
            <div className='w-[100px] h-[100px]'><Image className='w-full h-full' src={Chandan20}/></div>
            <div><p className='text-base text-secondary font-bold font-dm leading-6 pr-[100px]'>Product name</p></div>
          </div>

          <div><h5 className='pt-8 pr-[312px] text-xl text-secondary font-bold font-dm'>$44.00</h5></div>

          <div className='flex gap-x-9 border border-[#F0F0F0] mt-8 px-5 py-3 mr-[270px]'>
              <p>-</p>
              <p>1</p>
              <p>+</p>
          </div>

          <div><h5 className='pt-8 text-xl text-secondary font-bold font-dm'>$44.00</h5></div>
        </Flex>

        <Flex className='justify-between items-center pb-7 border-b border-1 border-r border-[#F0F0F0]'>
          <div className='flex gap-x-5 items-center pt-8'>
            <select className='px-10 py-3 border border-[#F0F0F0] ml-5' name="size" id="size">
              <option value="S">S</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="XL">XL</option>
            </select>
            <h5 className='text-sm text-secondary font-dm font-bold'>Apply coupon</h5>
          </div>

          <div><h5 className='text-sm text-secondary font-dm font-bold mr-5 pt-8'>Update cart</h5></div>
        </Flex>

        <h5 className='text-xl text-secondary font-dm font-bold text-right pt-13 pb-6'>Cart totals</h5>
        
      <div className='flex flex-col justify-end items-end'>
        <table className='w-[640px] border-collapse border border-[#F0F0F0] '>
          <tr>
            <td className='text-base text-secondary font-dm font-bold leading-6 px-5 py-4 border border-[#F0F0F0]'>Subtotal</td>
            <td className='text-base text-primary font-dm font-normal leading-6 px-5 py-4 border border-[#F0F0F0]'>389.99 $</td>
          </tr>

          <tr>
            <td className='text-base text-secondary font-dm font-bold leading-6 px-5 py-4 border border-[#F0F0F0]'>Total</td>
            <td className='text-base text-secondary font-dm font-normal leading-6 px-5 py-4 border border-[#F0F0F0]'>389.99 $</td>
          </tr>
        </table>
      </div>

        <div className='text-right pt-8'>
          <Button text='Proceed to Checkout'/>
        </div>

      </Container>
    </section>
  )
}

export default Cart
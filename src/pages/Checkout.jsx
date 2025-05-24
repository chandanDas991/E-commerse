import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { CgChevronRight } from 'react-icons/cg'
import Input from '../components/Input'
import Button from '../components/Button'

const Checkout = () => {
  return (
    <section className='py-26'>
      <Container>
        <SubHeading text='Checkout'/>
        <Flex className='items-center gap-x-2 pb-[136px]'>
          <p className='text-sm text-[#6D6D60] font-dm font-normal'>Home</p>
          <span className='text-sm text-[#6D6D60] font-dm font-normal'><CgChevronRight className=''/></span>
          <p className='text-sm text-[#6D6D60] font-dm font-normal'>Checkout</p>
        </Flex>

        <p className='text-base text-[#6D6D60] font-dm font-normal leading-8 pb-25'>Have a coupon?<a className='text-secondary' href="">Click here to enter your code</a></p>
        <h4 className='text-[39px] text-secondary font-bold font-dm pb-10'>Billing Details</h4>

        <Flex className='w-[70%] gap-x-5'>
            <Input className='w-[550px]' text='Frist Name *' check='first' placeholder='First Name' type='text'/>
            <Input className='w-[550px]' text='Last Name *' check='Last' placeholder='Last Name' type='text'/>
        </Flex>

        <Input className='w-[70%]' text='Companye Name (optional)' type='text' placeholder='Company Name' check='company'/>
        <Input className='w-[70%]' text='Country *' type='text' placeholder='Please select' check='country'/>
        <Input className='w-[70%]' text='Street Address *' type='text' placeholder='House number and street name' check='address'/>
        <input className='w-[70%] pb-5 pt-2 pl-2 border-b-2 border-[#F0F0F0]' type="text" placeholder='Apartment, suite, unit etc. (optional)' />
      <Input className='w-[70%]' text='Town/City *' type='text' placeholder='Town/City' check='city'/>
      <Input className='w-[70%]' text='County (optional)' type='text' placeholder='County' check='county'/>
      <Input className='w-[70%]' text='Post Code *' type='text' placeholder='Post Code' check='post code'/>
      <Input className='w-[70%]' text='Phone *' type='text' placeholder='Phone' check='phone'/>
      <Input className='w-[70%]' text='Email Address *' type='text' placeholder='Email' check='email'/>

<h4 className='text-[39px] text-secondary font-bold font-dm pb-10 pt-32'>Additional Information</h4>
<p className='text-base text-secondary font-bold font-dm leading-6'>Other Notes (optional)</p>
<p className='w-[70%] text-sm text-primary font-normal font-dm pt-3 pb-22 border-b-2 border-[#F0F0F0]'>Notes about your order, e.g. special notes for delivery.</p>

      <h4 className='text-[39px] text-secondary font-bold font-dm pb-12 pt-32'>Your Order</h4>
      <table className='border border-[#F0F0F0] text-left'>
        <th className='border border-[#F0F0F0] py-4 pl-3 pr-50'>Product</th>
        <th className='border border-[#F0F0F0] py-4 pl-3 pr-40'>Total</th>
      <tr className='border border-[#F0F0F0] py-4 pl-3 pr-50'>
          <td className='text-base text-secondary font-bold font-dm border border-[#F0F0F0] py-4 pl-3 pr-50'>Product name x 1</td>
          <td className='border border-[#F0F0F0] py-4 pl-3 pr-40 text-primary'>389.99 $</td>
      </tr>
      <tr className='border border-[#F0F0F0] py-4 pl-3 pr-50'>
          <td className='text-base text-secondary font-bold font-dm border border-[#F0F0F0] py-4 pl-3 pr-50'>Subtotal</td>
          <td className='border border-[#F0F0F0] py-4 pl-3 pr-40'>389.99 $</td>
      </tr>
      <tr className='border border-[#F0F0F0] py-4 pl-3 pr-50'>
          <td className='text-base text-secondary font-bold font-dm border border-[#F0F0F0] py-4 pl-3 pr-50'>Total</td>
          <td className='border border-[#F0F0F0] py-4 pl-3 pr-40'>389.99 $</td>
      </tr>
      </table>

    <div className='w-[1053px] mt-15 items-center border border-[#F0F0F0]'>
      <Flex className='gap-x-3 pt-6 pl-9'>
        <input className='accent-secondary text-base text-secondary font-bold font-normal leading-6' type="radio" name="" id="bank" />
        <label className='text-base text-secondary font-bold font-dm leading-6' htmlFor="bank">Bank</label>
      </Flex>
      <div className='mx-9 mt-4 py-4 px-5 bg-[#F5F5F3]'><p className='text-primary'>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p></div>
    

    <Flex className='gap-x-3 pt-6 pl-9'>
      <input className='accent-secondary text-base text-secondary font-dm font-bold leading-6 ' type="radio" name="" id='bank1'/>
      <label className='text-base text-primary font-bold font-dm leading-6' htmlFor="bank1">Bank 2</label>
    </Flex>
    <p className='w-[985px] text-base text-primary font-normal font-dm leading-8 pt-4 pb-6 pl-9'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our<a className='text-secondary' href=""> privacy policy.</a></p>
    <div className='pl-9 pb-8'><Button text='Proceed to Bank'/></div>
    </div>
      </Container>
    </section>
  )
}

export default Checkout
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'
import FooterLogo from '../assets/OREBI©footer.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3] py-[55px] '>
        <Container>
            <Flex>
                <div className='w-1/8 '>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>MENU</h6>
                    <ul className='flex flex-col gap-y-[6px]'>
                        <List text='Home'/>
                        <List text='Shop'/>
                        <List text='About'/>
                        <List text='Contact'/>
                        <List text='Journal'/>
                    </ul>
                </div>

                <div className='w-1/8 '>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>SHOP</h6>
                    <ul className='flex flex-col gap-y-[6px]'>
                        <List text='Category 1'/>
                        <List text='Category 2'/>
                        <List text='Category 3'/>
                        <List text='Category 4'/>
                        <List text='Category 5'/>
                    </ul>
                </div>

                <div className='w-1/8 '>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>HELP</h6>
                    <ul className='flex flex-col gap-y-[6px]'>
                        <List text='Privacy Policy'/>
                        <List text='Terms & Conditions'/>
                        <List text='Special E-shop'/>
                        <List text='Shipping'/>
                        <List text='Secure Payments'/>
                    </ul>
                </div>

                <div className='w-2/8 justify-items-center'>
                <div className=''>
                <h6 className='text-base text-secondary font-dm font-bold '>(052) 611-5711</h6>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>company@domain.com</h6>
                <p className='text-sm text-[#6D6D6D] font-dm font-normal'>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                </div>

                <div className='w-3/8 '>
                    <Image className='mx-auto' src={FooterLogo}/>
                </div>
            </Flex>

            <Flex className='justify-between py-16'>
               <Flex className='gap-x-6'>
               <FaFacebookF />
               <FaLinkedinIn />
               <IoLogoInstagram />
               </Flex>
                 
               <div >
                <p className='text-sm text-[#6D6D6D] font-dm font-normal'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div> 
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer
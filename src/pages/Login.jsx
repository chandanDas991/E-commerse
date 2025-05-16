import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Button from '../components/Button'

const Login = () => {
  return (
    <section className='pt-[124px] pb-[140px]'>
      <Container>
        <SubHeading text="Login"/>
        <p className='pt-[11px]'>Home  >  Login</p>

        <p className='text-base text-primary font-dm font-normal border-b border-[#F0F0F0] pb-[60px] mb-[57px] pt-[128px] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

        <h2 className='pb-10 text-secondary text-[39px] font-dm font-bold'>Returning Customer</h2>

       <Flex className='gap-x-[39px]'>
       <label className='text-base text-secondary font-dm font-bold' htmlFor="email">Email address <br />
          <input className='py-4 mb-6 border-b border-[#F0F0F0] w-[508px] placeholder:text-primary text-black' id='email' type="text" placeholder='company@domain.com'/>
        </label>
          <br />
        <label className='text-base text-secondary font-dm font-bold' htmlFor="password">Password 
          <br />
          <input className='py-4 mb-6 border-b border-[#F0F0F0] w-[508px] placeholder:text-primary text-black' id='password' type="text" placeholder='..........'/>
        </label>
       </Flex>

        <div className='border-b border-[#F0F0F0] pb-[70px] pt-2'>
        <Button className='' text='Log in'/>
        </div>

        <h2 className='pb-10 text-secondary text-[39px] font-dm font-bold pt-[58px]'>New Customer</h2>

        
        <p className='text-base text-primary font-dm font-normal pb-[50px] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

        <Button text='Continue'/>

      </Container>
    </section>
  )
}

export default Login
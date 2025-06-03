import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import SubHeading from '../components/SubHeading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Contact = () => {
 let data=useSelector((state)=>state.active.prvevalue)
 let data2=useSelector((state)=>state.active.daybefore)

  return (
    <section className='py-[140px]'>
      <Container>
        <SubHeading text="Contact"/>
      <p> <Link to={data2=="Home"?"/":`/${data}`}>{data}</Link> > contact</p>

        <h2 className='pb-10 text-secondary text-[39px] font-dm font-bold pt-[136px]'>Fill up a Form</h2>

        <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Name <br />
          <input className='py-4 mb-6 border-b border-[#F0F0F0] w-1/2 placeholder:text-primary text-black' id='name' type="text" placeholder='your name here'/>
        </label>
            <br />
        <label className='text-base text-secondary font-dm font-bold' htmlFor="email">Email <br />
          <input className='py-4 mb-6 border-b border-[#F0F0F0] w-1/2 placeholder:text-primary text-black' id='email' type="text" placeholder='Your email here'/>
        </label>
          <br />
        <label className='text-base text-secondary font-dm font-bold' htmlFor="massage">Message <br />
          <textarea className='py-4  border-b border-[#F0F0F0] w-[49%] placeholder:text-primary text-black' id='massage' type="text" placeholder='Your message here'/>
        </label>
          <br />
          <Button className='mt-7 mb-[140px]' text="post"/>

          <iframe className='w-full h-[572px]' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117316.39150559713!2d89.91643007247917!3d23.238092664458172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x39ffd7d566481e53%3A0x39178a9fc098d278!2sJatrabari!3m2!1d23.237956399999998!2d89.9988343!4m0!5e0!3m2!1sbn!2sbd!4v1747333985620!5m2!1sbn!2sbd"    allowfullscreen="" loading="jalipar" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </Container>
    </section>
  )
}

export default Contact
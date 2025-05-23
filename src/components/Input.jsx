import React from 'react'

const Input = ({text, check, placeholder, type, className}) => {
  return (
    <div className='pt-6'>
        <label className='text-base text-secondary font-bold font-dm leading-6' htmlFor={check}>{text} <br />
            <input id={check} type={type} className={`text-base font-normal py-4 px-2 border-b-2 border-[#F0F0F0] placeholder:text-sm placeholder:text-[#6D6D60] placeholder:font-normal ${className}`} placeholder={placeholder} /> <br />
        </label>
    </div>
  )
}

export default Input
import React from 'react'

const SideList = ({text, className}) => {
  return (
    <li className={`w-[234px] text-bsae text-primary font-normal font-dm leading-7 border-b-2 border-[#F0F0F0] pb-5 hover:text-secondary hover:font-bold duration-500 ${className}`}>{text}</li>
  )
}

export default SideList
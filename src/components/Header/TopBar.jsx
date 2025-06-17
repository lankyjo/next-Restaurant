import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { RiPhoneLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import Link from 'next/link';

const TopBar = () => {
  return (
  <div className="topbar hidden md:block text-sm border-b border-white-alpha-20">
    <div className='flex md:justify-center xl:justify-between items-center container mx-auto py-4'>
        <div className='md:hidden xl:flex gap-5'>
            <span className='flex gap-2 items-center'><MdOutlineLocationOn /> Restaurant St, Delicious City, London 9578, UK</span>
            <span className='separator'></span>
            <span className='flex gap-2 items-center'><LuClock3 /> Daily : 8.00 am to 10.00 pm</span>
        </div> 

        <div className='flex gap-5'>
            <span className='flex gap-2 items-center'><RiPhoneLine /> +1 123 456 7890</span>
            <span className='separator'></span>
            <span className='flex gap-2 items-center '><MdMailOutline /> <Link className=' hover:text-gold-crayola' href="mailto:booking@restaurant.com">booking@restaurant.com</Link></span>
        </div>
    </div>
  </div>
  )
}

export default TopBar

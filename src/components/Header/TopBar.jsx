'use client';
import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { RiPhoneLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import Link from 'next/link';
import useLandingPageStore from '../../../libs/useLandingPageStore';
import Image from 'next/image';



const TopBar = () => {
const details = useLandingPageStore((state) => state.details);

  return (
  <div className="topbar hidden md:block text-sm border-b border-white-alpha-20">
    <div className='flex md:justify-center xl:justify-between items-center container mx-auto px-4 py-4'>
        <div className='md:hidden xl:flex gap-5'>
            <span className='flex gap-2 items-center' onClick={()=>console.log(details)}><Image src={'/ogaticket.png'} width={30} height={30} alt='ogalogo' className='invert brightness-0'/> Powered by OgaTicket</span>
            <span className='separator'></span>
            {/* <span className='flex gap-2 items-center'><LuClock3 /> Daily : 8.00 am to 10.00 pm</span> */}
        </div> 

        <div className='flex gap-5'>
            <span className='flex gap-2 items-center'><RiPhoneLine /> +1 123 456 7890</span>
            <span className='separator'></span>
            <span className='flex gap-2 items-center '><MdMailOutline /> <Link className=' hover:text-gold-crayola' href="mailto:booking@restaurant.com">{details?.footerDetails?.footerEmail}</Link></span>
        </div>
    </div>
  </div>
  )
}

export default TopBar
